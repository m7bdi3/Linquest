"use client";

import image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useExitModal } from "@/store/use-exit-model";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModal();
  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image
              src="/sad_mascot.png"
              alt="sad mascot"
              height={80}
              width={80}
            />
          </div>
          <DialogTitle className="font-bold text-center text-2xl">
            Wait, Don&apos;t go!
          </DialogTitle>
          <DialogDescription className="text-center text-base text-neutral-700">
            You&apos;re about to leave the lesson, Are you sure ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="primary"
              onClick={close}
              className="w-full"
              size="lg"
            >
              Keep Learning
            </Button>
            <Button
              variant="dangerOutline"
              onClick={() => {
                close();
                router.push("/learn");
              }}
              className="w-full"
              size={"lg"}
            >
              End Session
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
