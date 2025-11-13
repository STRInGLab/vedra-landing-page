import React from "react";
import { Button } from "@/components/ui/button";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FAQSection } from "./sections/FAQSection";
import { FooterSection } from "./sections/FooterSection";
import { InterviewProcessSection } from "./sections/InterviewProcessSection";
import { InterviewWorkflowSection } from "./sections/InterviewWorkflowSection";
import { KeyFeaturesSection } from "./sections/KeyFeaturesSection";
import { MainContentSection } from "./sections/MainContentSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const navItems = [
  { label: "Home" },
  { label: "Features" },
  { label: "Use-case" },
  { label: "How It Works" },
  { label: "Pricing" },
];

export const Landing = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <header className="w-full h-20 flex items-center justify-between px-[360px] py-0 bg-transparent backdrop-blur-md shadow-[0px_0.4px_16.17px_#00000014,0px_0.61px_10.11px_#2c2c2c0f,0px_4.04px_4.04px_#2c2c2c03] fixed top-0 left-0 right-0 z-50">
        <div className="relative w-[115.0px] h-[38.84px] bg-[url(/figmaAssets/vedra-logo-white-1-1.png)] bg-cover bg-[50%_50%]" />

        <nav className="flex w-[542px] h-[46px] items-center justify-between relative">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-2.5 py-0 relative cursor-pointer"
              style={{
                width: item.label === "How It Works" ? "110px" : "90px",
                height: "28px",
              }}
            >
              <div className="relative flex items-center justify-center w-fit [font-family:'Instrument_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                {item.label}
              </div>
            </div>
          ))}
        </nav>

        <div className="inline-flex items-center justify-center gap-8 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <Button className="h-auto px-8 py-4 bg-[#3e96ff] rounded-[1000px] hover:bg-[#3e96ff]/90">
              <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-white text-base text-center tracking-[-0.24px] leading-[normal]">
                Start free trial
              </span>
            </Button>
          </div>
        </div>
      </header>

      <main className="w-full relative">
        <section className="relative w-full">
          <MainContentSection />
        </section>

        <section className="relative w-full bg-white pt-[400px] pb-20">
          <div className="absolute top-[-400px] left-1/2 -translate-x-1/2 z-10">
            <div className="relative w-[1066px] h-[795px]">
              <div className="relative h-full overflow-hidden rounded-3xl shadow-2xl bg-white">
                <div className="absolute top-6 left-[54px] w-[115px] h-10 bg-white" />

                <div className="absolute top-[27px] left-[60px] w-[100px] h-[34px] bg-[url(/figmaAssets/vedra-logo-1.png)] bg-cover bg-[50%_50%]" />

                <div className="absolute top-[533px] left-[568px] w-10 h-10 flex items-center justify-center bg-[#3e96ff] rounded-[56.51px] overflow-hidden">
                  <img
                    className="mt-[0.4px] h-6 ml-[-0.3px] w-[23.25px]"
                    alt="Group"
                    src="/figmaAssets/group-9.png"
                  />
                </div>

                <div className="absolute w-[calc(100%_-_471px)] h-[calc(100%_-_273px)] top-[263px] left-[494px] flex [background:url(..//figmaAssets/support.png)_50%_50%_/_cover]">
                  <div className="mt-[259.3px] w-[41px] h-[41px] ml-[51.5px] flex items-center justify-center bg-[#0066ff] rounded-[58.57px] overflow-hidden">
                    <img
                      className="mt-[0.5px] h-[24.88px] ml-[-0.3px] w-[24.1px]"
                      alt="Group"
                      src="/figmaAssets/group-9-1.png"
                    />
                  </div>
                </div>
              </div>
              
              <div className="absolute top-[-76px] left-1/2 -translate-x-1/2 w-[2669px] h-[313px] z-[-1] rounded-[60px] blur-[26px] bg-[linear-gradient(195deg,rgba(0,0,0,1)_0%,rgba(36,72,128,1)_17%,rgba(0,27,102,1)_30%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_50%,rgba(0,0,0,1)_60%,rgba(0,27,102,1)_70%,rgba(36,72,128,1)_80%,rgba(0,0,0,1)_100%)] opacity-60" />
            </div>
          </div>

          <div className="absolute top-[191px] right-[calc(50%-533px+959px-600px)] w-12 h-12 flex items-center justify-center bg-white rounded-[67.62px] overflow-hidden border border-solid border-[#3e96ff] z-20">
            <img
              className="mt-[-0.1px] h-[29.94px] ml-[1.0px] w-[29px]"
              alt="Group"
              src="/figmaAssets/group-9-2.png"
            />
          </div>
        </section>

        <section className="relative w-full">
          <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-white to-transparent pointer-events-none" style={{ backdropFilter: 'blur(20px)' }}></div>
          <KeyFeaturesSection />
        </section>

        <section className="relative w-full">
          <InterviewProcessSection />
        </section>

        <section className="relative w-full">
          <InterviewWorkflowSection />
        </section>

        <section className="relative w-full">
          <CallToActionSection />
        </section>

        <section className="relative w-full">
          <TestimonialsSection />
        </section>

        <section className="relative w-full">
          <FAQSection />
        </section>

        <section className="relative w-full">
          <FooterSection />
        </section>
      </main>
    </div>
  );
};
