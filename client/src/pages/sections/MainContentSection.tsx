import { CheckIcon, PlayIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const features = [
  { text: "Free 14-Day trial" },
  { text: "No Credit card required" },
  { text: "24/7 Customer Support" },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="relative flex flex-col w-full items-center pt-60 pb-[450px] px-4 bg-[linear-gradient(205deg,rgba(0,0,0,1)_0%,rgba(36,72,128,1)_20%,rgba(0,27,102,1)_30%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_50%,rgba(0,0,0,1)_60%,rgba(0,27,102,1)_70%,rgba(36,72,128,1)_80%,rgba(0,0,0,1)_100%)]">
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white pointer-events-none" style={{ backdropFilter: 'blur(8px)' }}></div>
      <div className="flex flex-col gap-10 w-full max-w-[1200px] items-center justify-center relative z-10">
        <div className="inline-flex flex-col items-center gap-3">
          <h1 className="flex items-center justify-center max-w-[964px] [font-family:'Instrument_Sans',Helvetica] font-bold text-7xl text-center tracking-[-2.16px] leading-[80px]">
            <span className="text-white">
              Build &amp; Deploy AI Chatbots in Minutes -
            </span>
            <span className="text-[#469bff]"> No Code</span>
          </h1>

          <p className="flex items-center justify-center [font-family:'Instrument_Sans',Helvetica] font-medium text-white text-[25px] text-center tracking-[-1.00px] leading-normal">
            Create intelligent agents trained on your data and embed them
            anywhere.
          </p>
        </div>

        <div className="inline-flex items-center gap-5 flex-wrap justify-center">
          <Button className="h-auto px-8 py-4 bg-[#3e96ff] hover:bg-[#3e96ff]/90 rounded-full [font-family:'Instrument_Sans',Helvetica] font-medium text-white text-base">
            Build your agent
          </Button>

          <Button
            variant="ghost"
            className="h-auto px-2.5 py-3.5 rounded-full hover:bg-white/10 [font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-base"
          >
            Watch Demo
            <PlayIcon className="w-6 h-6 ml-2 fill-white" />
          </Button>
        </div>

        <div className="inline-flex items-center justify-center gap-[30px] flex-wrap">
          {features.map((feature, index) => (
            <div key={index} className="inline-flex items-center gap-2.5">
              <CheckIcon className="w-[22px] h-[22px] text-white" />
              <span className="flex items-center justify-center [font-family:'Instrument_Sans',Helvetica] font-medium text-white text-base tracking-[0] leading-normal">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
