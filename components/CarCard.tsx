"use client";
import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}
function CarCard({ car }: CarCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent} <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div>
        <div className="relative w-full h-40 my-3 flex items-center justify-center">
          <Image
            src={generateCarImageUrl(car)}
            alt="car model"
            priority //loads the image first
            className="object-contain "
            width={300}
            height={300}
          />
        </div>
        <div className="relative flex w-full mt-2">
          <div className="flex group-hover:invisible w-full justify-between text-gray-500">
            <div className="flex flex-col gap-2 justify-center items-center">
              <Image
                src="/steering-wheel.svg"
                width={20}
                height={20}
                alt="steering wheel"
              />
              <p className="text-[14px]">
                {transmission === "a" ? "Auto" : "Manual"}
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <Image src="/tire.svg" width={20} height={20} alt="tile" />
              <p className="text-[14px]">{drive.toLocaleUpperCase()}</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <Image src="/gas.svg" width={20} height={20} alt="gas" />
              <p className="text-[14px]">{city_mpg} MPG</p>
            </div>
          </div>
          <div className="car-card__btn-container">
            <CustomButton
              title="Details"
              containerStyles="w-full py-[16px] rounded-full bg-primary-blue "
              rightIcon="/right-arrow.svg"
              handleClick={() => {
                setIsOpen(true);
              }}
              textStyles="text-white text-[14px] leading-[17px] font-bold"
            />
          </div>
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
}

export default CarCard;
