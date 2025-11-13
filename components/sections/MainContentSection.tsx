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
    <section className="relative flex flex-col w-full items-center pt-24 md:pt-32 lg:pt-48 xl:pt-60 pb-[200px] sm:pb-[300px] md:pb-[350px] lg:pb-[450px] px-4 sm:px-6 md:px-12 lg:px-16 bg-[linear-gradient(205deg,rgba(0,0,0,1)_0%,rgba(36,72,128,1)_20%,rgba(0,27,102,1)_30%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_50%,rgba(0,0,0,1)_60%,rgba(0,27,102,1)_70%,rgba(36,72,128,1)_80%,rgba(0,0,0,1)_100%)]">
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white pointer-events-none" style={{ backdropFilter: 'blur(8px)' }}></div>
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full max-w-[1200px] items-center justify-center relative z-10">
        <div className="inline-flex flex-col items-center gap-3 sm:gap-4 px-4">
          <h1 className="flex flex-wrap items-center justify-center max-w-full md:max-w-[964px] [font-family:'Instrument_Sans',Helvetica] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center tracking-tight md:tracking-[-2.16px] leading-tight sm:leading-[1.2] md:leading-[80px]">
            <span className="text-white">
              Build &amp; Deploy AI Chatbots in Minutes -
            </span>
            <span className="text-[#469bff]"> No Code</span>
          </h1>

          <p className="flex items-center justify-center [font-family:'Instrument_Sans',Helvetica] font-medium text-white text-base sm:text-lg md:text-xl lg:text-[25px] text-center tracking-tight md:tracking-[-1.00px] leading-normal px-4 max-w-3xl">
            Create intelligent agents trained on your data and embed them
            anywhere.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 flex-wrap justify-center w-full sm:w-auto px-4">
          <Button className="w-full sm:w-auto h-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#3e96ff] hover:bg-[#3e96ff]/90 rounded-full [font-family:'Instrument_Sans',Helvetica] font-medium text-white text-sm sm:text-base">
            Build your agent
          </Button>

          <Button
            variant="ghost"
            className="w-full sm:w-auto h-auto px-2.5 py-3 sm:py-3.5 rounded-full hover:bg-white/10 [font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-sm sm:text-base"
          >
            Watch Demo
            <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6 ml-2 fill-white" />
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-[30px] flex-wrap px-4">
          {features.map((feature, index) => (
            <div key={index} className="inline-flex items-center gap-2 sm:gap-2.5">
              <CheckIcon className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-white flex-shrink-0" />
              <span className="flex items-center justify-center [font-family:'Instrument_Sans',Helvetica] font-medium text-white text-sm sm:text-base tracking-[0] leading-normal">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
