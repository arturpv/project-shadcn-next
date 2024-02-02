import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

interface Instrument {
  title: string,
  image: string,
  price: string,
  description: string,
  link: string,
  acoustic: boolean,
  id: string
}

async function getInstruments(): Promise<Instrument[]> {
  const result = await fetch('http://localhost:4000/instruments')

  // delay response
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return result.json()
}

export default async function Home() {
  const instrument = await getInstruments()

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {instrument.map(instruments => (
          <Card key={instruments.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src={`/img/${instruments.image}`} alt="@shadcn" />
                <AvatarFallback>
                  {instruments.title.slice(0,2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{instruments.title}</CardTitle>
                <CardDescription>{instruments.price}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{instruments.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
             <AlertDialog>
                <AlertDialogTrigger><Button>Link to Buy</Button></AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                    You will be send to another site!
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>
                    <Button asChild>
                      <Link href={`${instruments.link}`}>Continue</Link>
                    </Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              
                {instruments.acoustic && <Badge variant="secondary">ACOUSTIC!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}
