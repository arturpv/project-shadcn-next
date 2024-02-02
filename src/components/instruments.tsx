"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { Instrument } from "@/app/page";

interface InstrumentsProps {
  instruments: Instrument[];
}

export function Instruments({ instruments }: InstrumentsProps) {
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {instruments.map((instrument) => (
          <Card key={instrument.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src={`/img/${instrument.image}`} alt="@shadcn" />
                <AvatarFallback>{instrument.title.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{instrument.title}</CardTitle>
                <CardDescription>{instrument.price}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{instrument.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button>Link to Buy</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      You will be send to another site!
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>
                      <Button asChild>
                        <Link href={`${instrument.link}`}>Continue</Link>
                      </Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {instrument.acoustic && (
                <Badge variant="secondary">ACOUSTIC!</Badge>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
