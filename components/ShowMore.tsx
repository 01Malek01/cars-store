"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ShowMoreButtonProps } from "@/types";
import CustomButton from "./CustomButton";
function ShowMore({ pageNumber, isNext }: ShowMoreButtonProps) {
  const router = useRouter();
  const handleNavigation = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("limit", String((pageNumber + 1) * 10));
    const newPathName = `${
      window.location.pathname
    }${`?${searchParams.toString()}`}`;
    router.push(newPathName);
  };
  return (
    <div className="w-full flex items-center justify-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}

export default ShowMore;
