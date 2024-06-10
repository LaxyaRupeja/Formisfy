import React from "react";
import { PinContainer } from "./3d-pin";
import { LucideIcon } from "lucide-react";

interface FeaturesCardProps {
  title: string;
  Icon: LucideIcon;
  description: string;
  heading: string;
}

const FeaturesCard = ({
  title,
  Icon,
  description,
  heading,
}: FeaturesCardProps) => {
  return (
    <PinContainer title={title} containerClassName="bg-white" className="">
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
        <h3 className="max-w-xs !pb-2 !m-0   text-base text-blue-600">
          {heading}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">{description}</span>
        </div>
        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 items-center justify-center">
          <div className="">
            <Icon className="text-white h-32 w-32" size={32} />
          </div>
        </div>
      </div>
    </PinContainer>
  );
};

export default FeaturesCard;
