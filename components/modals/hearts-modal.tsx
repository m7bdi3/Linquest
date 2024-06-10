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

import { useHeartsModal } from "@/store/use-hearts-model";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export const HeartsModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useHeartsModal();
  useEffect(() => setIsClient(true), []);

  const onClick = () => {
    close();
    router.push("/store");
  };

  if (!isClient) return null;
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/bad_mascot.png" alt="mascot" height={80} width={80} />
          </div>
          <DialogTitle className="font-bold text-center text-2xl">
            You ran out of hearts!
          </DialogTitle>
          <DialogDescription className="text-center text-base text-neutral-700">
            Get Pro for unlimited hearts, or you can purchase them from store
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="primary"
              onClick={onClick}
              className="w-full"
              size="lg"
            >
              Get unlimited hearts
            </Button>
            <Button
              variant="primaryOutline"
              onClick={close}
              className="w-full"
              size={"lg"}
            >
              No thanks
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
