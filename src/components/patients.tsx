"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { HorizontalMore, Search } from "@/assets";
import { usePatient } from "@/hook/usePatient";
import { useMediaQuery } from "@/hook/useMediaQuery";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
  DrawerFooter,
  DrawerDescription,
} from "@/components/ui/drawer";

function PatientList({ onSelect }: { onSelect?: (name: string) => void }) {
  const { patients } = usePatient();

  return (
    <div className="flex flex-col gap-2 mt-2 mb-3 px-0">
      {patients?.map((patient) => {
        const isActive = patient.name === "Jessica Taylor";
        return (
          <div
            key={patient.name}
            role="button"
            tabIndex={0}
            onClick={() => onSelect?.(patient.name)}
            className={cn(
              "flex items-center justify-between w-full px-5 py-4 transition-transform duration-300 ease-in-out",
              isActive
                ? "bg-active-2"
                : "hover:bg-active-2/60 hover:scale-[1.01] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-active-1/60"
            )}
          >
            <div className="flex gap-2.5 items-center">
              <img
                src={patient.profile_picture}
                alt={`${patient.name} avatar`}
                className="size-9 lg:size-10 2xl:size-12 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <div className="body-emphasized-14pt">{patient.name}</div>
                <div className="flex gap-2">
                  <div className="text-sm">{patient.gender}, </div>
                  <div className="body-secondary-info-14pt">{patient.age}</div>
                </div>
              </div>
            </div>
            <img src={HorizontalMore} alt="more icon" />
          </div>
        );
      })}
    </div>
  );
}

function CurrentUserBar({
  currentUser,
  renderTrigger,
}: {
  currentUser: { name: string; profile_picture?: string } | null;
  renderTrigger: () => React.ReactElement;
}) {
  return (
    <div className="w-full bg-white rounded-2xl py-3 px-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src={currentUser?.profile_picture}
          alt={currentUser?.name ?? "Jessica Taylor"}
          className="size-12 rounded-full object-cover bg-gray-100"
        />
        <div className="flex flex-col">
          <div className="text-sm font-semibold text-slate-900">
            {currentUser?.name ?? "Jessica Taylor"}
          </div>
          <div className="text-xs text-slate-500">Current Patient</div>
        </div>
      </div>

      <div>{renderTrigger()}</div>
    </div>
  );
}

export default function Patients() {
  const [open, setOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)"); // md .. lg-1

  const { patients } = usePatient();
  const currentUser =
    patients?.find((p) => p.name === "Jessica Taylor") ?? null;

  if (isDesktop) {
    return (
      <div className="bg-white rounded-2xl py-3 w-[var(--patient-width)] h-full max-lg:hidden">
        <div className="flex justify-between py-2 px-5">
          <div className="text-xl font-bold">Patients</div>
          <img src={Search} alt="search" />
        </div>

        <div className="flex flex-col gap-2 mt-8 mb-3 overflow-y-auto overflow-x-hidden max-h-250 lg:max-h-200 2xl:max-h-220 custom-scrollbar px-0">
          <PatientList />
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="w-full md:block lg:hidden">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="sr-only">Open patients dialog</button>
          </DialogTrigger>

          <CurrentUserBar
            currentUser={currentUser}
            renderTrigger={() => (
              <DialogTrigger asChild>
                <button
                  className="px-3 py-2 rounded-full bg-active-1 font-bold text-sm"
                  aria-label="Open patients drawer"
                >
                  View all patients
                </button>
              </DialogTrigger>
            )}
          />

          <DialogContent
            aria-describedby={undefined}
            className="sm:max-w-sm max-h-[80vh] flex flex-col p-0"
          >
            <DialogHeader className="px-5 pt-10">
              <DialogTitle asChild>
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold">Patients</div>
                  <img src={Search} alt="search" />
                </div>
              </DialogTitle>
              <DialogDescription className="sr-only">
                Select a patient to view their information
              </DialogDescription>
            </DialogHeader>

            <div className="flex-1 overflow-y-auto custom-scrollbar px-2 mb-4">
              <PatientList onSelect={() => setOpen(false)} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="w-full block md:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <div className="mb-3">
            <CurrentUserBar
              currentUser={currentUser}
              renderTrigger={() => (
                <DrawerTrigger asChild>
                  <button
                    className="px-3 py-2 rounded-full bg-active-1 font-bold text-sm"
                    aria-label="Open patients drawer"
                  >
                    View all patients
                  </button>
                </DrawerTrigger>
              )}
            />
          </div>
        </DrawerTrigger>

        <DrawerContent aria-describedby={undefined}>
          <DrawerHeader>
            <DrawerTitle>
              <div className="flex px-4 justify-between items-center">
                <div className="text-xl font-bold">Patients</div>
                <img src={Search} alt="search" />
              </div>
            </DrawerTitle>
            <DrawerDescription className="sr-only">
              Select a patient to view their information
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4 overflow-y-auto flex-1">
            <PatientList onSelect={() => setOpen(false)} />
          </div>

          <DrawerFooter>
            <DrawerClose className="bg-active-1 w-1/2 mx-auto py-2 text-sm rounded-full font-semibold">
              Close
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
