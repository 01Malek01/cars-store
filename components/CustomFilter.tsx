"use client";
import React, { FormEventHandler, Fragment, ReactEventHandler } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import Image from "next/image";
function CustomFilter({ title, options }: CustomFilterProps) {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();
  const handleParameterUpdate = (e: { title: string; value: string }) => {
    const searchParams = new URLSearchParams(window.location.search); //current search params

    searchParams.set(title, e.value.toLocaleLowerCase());
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };
  return (
    <div className="w-fit ">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleParameterUpdate(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn w-full">
            <span className="block truncate">{selected.title}</span>
            <Image
              src={"/chevron-up-down.svg"}
              width={20}
              height={20}
              alt="icon"
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={"custom-filter__options"}>
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? `bg-primary-blue text-white` : `text-gray-900`
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate font-normal ${
                        selected && `font-bold`
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter;
