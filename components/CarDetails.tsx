"use client";
import { CarProps } from "@/types";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";
interface CarDetailsProps {
  car: CarProps;
  isOpen: boolean;
  closeModal: () => void;
}
function CarDetails({ car, isOpen, closeModal }: CarDetailsProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={
                    "relative max-w-lg max-h-[90vh] overflow-y-auto bg-white transform rounded-xl w-full text-left shadow-xl transition-all flex flex-col gap-5 p-6"
                  }
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      width={20}
                      height={20}
                      alt="close"
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1  flex flex-col gap-3 items-center justify-center">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "angle")}
                        alt="car model"
                        priority //loads the image first
                        className="object-contain "
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 rounded-lg bg-primary-blue-100 ">
                        <Image
                          src={generateCarImageUrl(car, 23)}
                          alt="car model"
                          priority //loads the image first
                          className="object-contain "
                          width={300}
                          height={300}
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 rounded-lg bg-primary-blue-100 ">
                        <Image
                          src={generateCarImageUrl(car, 33)}
                          alt="car model"
                          priority //loads the image first
                          className="object-contain "
                          width={300}
                          height={300}
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 rounded-lg bg-primary-blue-100 ">
                        <Image
                          src={generateCarImageUrl(car, 13)}
                          alt="car model"
                          priority //loads the image first
                          className="object-contain "
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                    {/* <div className="flex gap-3 items-center"></div> */}
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>
                    <div className="flex mt-3  gap-4 flex-col">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right flex-wrap"
                          key={key}
                        >
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CarDetails;
