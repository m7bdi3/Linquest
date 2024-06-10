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

import { usePracticeModal } from "@/store/use-practice-model";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

export const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = usePracticeModal();
  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/heart.svg" alt="heart" height={100} width={100} />
          </div>
          <DialogTitle className="font-bold text-center text-2xl">
            Practice Lesson
          </DialogTitle>
          <DialogDescription className="text-center text-base text-neutral-700">
            Use practice lessons to earn more hearts and points. You can&apos;t loose
            hearts or points in practice lessons.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="primary"
              onClick={close}
              className="w-full"
              size={"lg"}
            >
              Understood
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
