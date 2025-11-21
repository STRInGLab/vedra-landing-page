import { MobileNav } from "@/components/navigation/MobileNav";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { InterviewProcessSection } from "@/components/sections/InterviewProcessSection";
import { InterviewWorkflowSection } from "@/components/sections/InterviewWorkflowSection";
import { KeyFeaturesSection } from "@/components/sections/KeyFeaturesSection";
import { MainContentSection } from "@/components/sections/MainContentSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home" },
  { label: "Features" },
  { label: "Use-case" },
  { label: "How It Works" },
  { label: "Pricing" },
];

export default function HomePage() {
  return (
    <div className="bg-white w-full min-h-screen relative overflow-x-hidden flex flex-col">
      <header className="absolute top-0 left-0 right-0 z-50 w-full h-16 md:h-20 flex items-center justify-between px-6 md:px-12 py-0 bg-transparent backdrop-blur-md shadow-[0px_0.4px_16.17px_#00000014,0px_0.61px_10.11px_#2c2c2c0f,0px_4.04px_4.04px_#2c2c2c03]">
        <div className="relative w-24 md:w-[115px] h-8 md:h-[38.84px]">
          <img src="/figmaAssets/vedra-logo-white-1-1.png" alt="Vedra Logo" className="w-full h-full object-contain" />
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="[font-family:'Instrument_Sans',Helvetica] font-normal text-white text-sm lg:text-base hover:text-[#3e96ff] transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex h-auto px-6 lg:px-8 py-3 lg:py-4 bg-[#3e96ff] rounded-full hover:bg-[#3e96ff]/90">
            <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-white text-sm lg:text-base text-center tracking-[-0.24px] leading-[normal]">
              Start free trial
            </span>
          </Button>
          <MobileNav />
        </div>
      </header>

      <main className="w-full relative">
        <section className="relative w-full">
          <MainContentSection />
        </section>
        <section className="relative w-full bg-white pt-[150px] sm:pt-[250px] md:pt-[350px] lg:pt-[400px] pb-12 sm:pb-16 md:pb-20 px-4">
          <div className="absolute top-[-100px] sm:top-[-200px] md:top-[-300px] lg:top-[-400px] left-1/2 -translate-x-1/2 z-10 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[1066px] max-w-full">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/12] md:aspect-[1066/795]">
              <div className="relative h-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-white">
                <div className="absolute top-3 sm:top-4 md:top-6 left-6 sm:left-8 md:left-[54px] w-16 sm:w-20 md:w-[115px] h-6 sm:h-8 md:h-10 bg-white" />

                <div className="absolute top-4 sm:top-5 md:top-[27px] left-7 sm:left-9 md:left-[60px] w-14 sm:w-16 md:w-[100px] h-5 sm:h-6 md:h-[34px]">
                  <img src="/figmaAssets/vedra-logo-1.png" alt="Vedra Logo" className="w-full h-full object-contain" />
                </div>

                <div className="absolute bottom-[20%] sm:bottom-[25%] md:top-[533px] left-1/2 sm:left-[55%] md:left-[568px] w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 flex items-center justify-center bg-[#3e96ff] rounded-full overflow-hidden">
                  <img
                    className="h-4 sm:h-5 md:h-6 w-auto"
                    alt="Group"
                    src="/figmaAssets/group-9.png"
                  />
                </div>

                <div 
                  className="absolute bottom-0 right-0 w-[50%] sm:w-[45%] md:w-[60%] h-[50%] sm:h-[50%] md:h-[65%] flex items-end justify-start z-10" 
                  style={{ 
                    backgroundImage: "url(/figmaAssets/support.png)", 
                    backgroundPosition: "bottom right", 
                    backgroundSize: "contain", 
                    backgroundRepeat: "no-repeat" 
                  }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-[52px] md:h-[52px] m-2 sm:m-4 md:m-8 flex items-center justify-center bg-[#0066ff] rounded-full overflow-hidden shadow-md">
                    <img
                      className="h-4 sm:h-5 md:h-[30px] w-auto"
                      alt="Group"
                      src="/figmaAssets/group-9-1.png"
                    />
                  </div>
                </div>
              </div>
              
              <div className="absolute top-[-30px] sm:top-[-50px] md:top-[-76px] left-1/2 -translate-x-1/2 w-full max-w-full h-[150px] sm:h-[200px] md:h-[313px] z-[-1] rounded-[30px] sm:rounded-[45px] md:rounded-[60px] blur-[15px] sm:blur-[20px] md:blur-[26px] bg-[linear-gradient(195deg,rgba(0,0,0,1)_0%,rgba(36,72,128,1)_17%,rgba(0,27,102,1)_30%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_50%,rgba(0,0,0,1)_60%,rgba(0,27,102,1)_70%,rgba(36,72,128,1)_80%,rgba(0,0,0,1)_100%)] opacity-60" />
            </div>
          </div>

          <div className="hidden md:flex absolute top-[100px] lg:top-[191px] right-[5%] lg:right-[calc(50%-533px+959px-600px)] w-10 h-10 lg:w-12 lg:h-12 items-center justify-center bg-white rounded-full overflow-hidden border border-solid border-[#3e96ff] z-20">
            <img
              className="h-6 lg:h-[29.94px] w-auto"
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
}
