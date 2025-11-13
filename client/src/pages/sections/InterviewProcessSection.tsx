import React from "react";
import { Badge } from "@/components/ui/badge";

const useCasesList = [
  "Integrations – WhatsApp,etc",
  "E-commerce Assistant",
  "AI Tutor for Education",
  "Knowledge Assistant",
  "Sales Bot",
  "HR & Recruitment Assistant",
  "Internal Knowledge Bot",
];

const solutionsList = [
  "Real Estate Agents & Property Developers",
  "Small and Medium Manufacturing Companies",
  "Hospitals & Clinics",
  "Doctors & Healthcare Professional",
  "Gyms & Fitness Centers",
  "E-commerce Stores & Retail Businesses",
  "Educational Institutes & Online Tutors",
  "Financial & Insurance Advisors",
  "Hotels, Restaurants & Travel Agencies",
  "IT Service Providers & SaaS Companies",
];

export const InterviewProcessSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[60px] pt-[90px] pb-[150px] px-[260px]">
      <header className="w-full max-w-[1200px] pt-0 pb-5 px-0 flex flex-col items-start gap-2.5">
        <Badge
          variant="outline"
          className="h-6 px-3.5 py-1.5 bg-white rounded border-[0.75px] border-[#e4e5e6] shadow-[0px_0.75px_1.5px_#0000000f,0px_0px_0.75px_#00000008]"
        >
          <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-neutral-600 text-xs text-center tracking-[-0.50px]">
            Use Cases
          </span>
        </Badge>

        <div className="flex items-center justify-between w-full">
          <div className="inline-flex flex-col items-start gap-2.5">
            <h2 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-[#2c2c2c] text-[42px] tracking-[0] leading-[normal]">
              AI Tools for Every
            </h2>

            <div className="w-[411px] h-16 flex items-center gap-2.5 pl-3 pr-0 py-0 bg-[#3e96ff] rounded-[40px_40px_40px_0px]">
              <h2 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-[42px] tracking-[0] leading-[normal]">
                conversation need
              </h2>
            </div>
          </div>

          <p className="w-[518px] [font-family:'Instrument_Sans',Helvetica] font-medium text-[#2c2c2c] text-base tracking-[0] leading-[normal]">
            Effortlessly connect with customers 24/7 using an AI chatbot. <br />
            Integrate with your website, Messenger, LiveChat, or Slack to
            deliver instant, automated assistance on every platform.
          </p>
        </div>
      </header>

      <div className="flex flex-col w-full max-w-[1200px] gap-[60px]">
        <div className="grid grid-cols-2 gap-[80px] items-start">
          <div className="flex flex-col gap-[30px]">
            <h3 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-5xl tracking-[0] leading-[54px]">
              <span className="text-[#2c2c2c]">Connect </span>
              <span className="text-[#3e96ff]">Seamlessly</span>
              <span className="text-[#2c2c2c]"> Across All Platforms</span>
            </h3>

            <ul className="flex flex-col gap-5 list-disc pl-8">
              {useCasesList.map((useCase, index) => (
                <li
                  key={index}
                  className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#2c2c2c] text-[26px] tracking-[-0.78px] leading-[normal]"
                >
                  {useCase}
                </li>
              ))}
            </ul>
          </div>

          <img
            className="w-full h-[550px] object-cover"
            alt="Connect Seamlessly Across All Platforms"
            src="/figmaAssets/image-2.png"
          />
        </div>

        <div className="grid grid-cols-2 gap-[80px] items-start">
          <img
            className="w-full h-[567px] object-cover"
            alt="AI-Driven Solutions for Every Need"
            src="/figmaAssets/image-2-1.png"
          />

          <div className="flex flex-col gap-[30px]">
            <h3 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-5xl tracking-[0] leading-[54px]">
              <span className="text-[#2c2c2c]">AI-Driven </span>
              <span className="text-[#3e96ff]">Solutions</span>
              <span className="text-[#2c2c2c]"> for Every Need</span>
            </h3>

            <ul className="flex flex-col gap-5 list-disc pl-8">
              {solutionsList.map((solution, index) => (
                <li
                  key={index}
                  className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#2c2c2c] text-[26px] tracking-[-0.78px] leading-[normal]"
                >
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
