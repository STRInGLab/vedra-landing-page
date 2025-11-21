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
    <section className="flex flex-col w-full items-center gap-8 md:gap-10 lg:gap-[60px] pt-10 md:pt-16 lg:pt-[90px] pb-16 md:pb-24 lg:pb-[150px] px-4 sm:px-8 md:px-12 lg:px-16">
      <header className="w-full max-w-[1200px] pt-0 pb-5 px-0 flex flex-col items-start gap-2.5">
        <Badge
          variant="outline"
          className="h-6 px-3.5 py-1.5 bg-white rounded border-[0.75px] border-[#e4e5e6] shadow-[0px_0.75px_1.5px_#0000000f,0px_0px_0.75px_#00000008]"
        >
          <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-neutral-600 text-xs text-center tracking-[-0.50px]">
            Use Cases
          </span>
        </Badge>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-4 lg:gap-8">
          <div className="inline-flex flex-col items-start gap-2.5 w-full lg:w-auto">
            <h2 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-[#2c2c2c] text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] tracking-[0] leading-[normal]">
              AI Tools for Every
            </h2>

            <div className="w-full max-w-[411px] h-12 sm:h-14 md:h-14 lg:h-16 flex items-center gap-2.5 pl-3 pr-0 py-0 bg-[#3e96ff] rounded-[40px_40px_40px_0px]">
              <h2 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] tracking-[0] leading-[normal]">
                conversation need
              </h2>
            </div>
          </div>

          <p className="w-full lg:w-[518px] [font-family:'Instrument_Sans',Helvetica] font-medium text-[#2c2c2c] text-sm sm:text-base tracking-[0] leading-[normal]">
            Effortlessly connect with customers 24/7 using an AI chatbot. <br className="hidden sm:inline" />
            Integrate with your website, Messenger, LiveChat, or Slack to
            deliver instant, automated assistance on every platform.
          </p>
        </div>
      </header>

      <div className="flex flex-col w-full max-w-[1200px] gap-10 md:gap-10 lg:gap-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-[80px] items-start">
          <div className="flex flex-col gap-5 md:gap-6 lg:gap-[30px]">
            <h3 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-[0] leading-tight md:leading-[46px] lg:leading-[54px]">
              <span className="text-[#2c2c2c]">Connect </span>
              <span className="text-[#3e96ff]">Seamlessly</span>
              <span className="text-[#2c2c2c]"> Across All Platforms</span>
            </h3>

            <ul className="flex flex-col gap-3 md:gap-3 lg:gap-5 list-disc pl-6 md:pl-6 lg:pl-8">
              {useCasesList.map((useCase, index) => (
                <li
                  key={index}
                  className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#2c2c2c] text-lg sm:text-xl md:text-xl lg:text-[26px] tracking-[-0.78px] leading-[normal]"
                >
                  {useCase}
                </li>
              ))}
            </ul>
          </div>

          <img 
            className="w-full h-auto object-contain rounded-lg" 
            alt="Connect Seamlessly Across All Platforms" 
            src="/figmaAssets/image-2.png" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-[80px] items-start">
          <img 
            className="w-full h-auto object-contain rounded-lg md:order-first" 
            alt="AI-Driven Solutions for Every Need" 
            src="/figmaAssets/image-2-1.png" 
          />

          <div className="flex flex-col gap-5 md:gap-6 lg:gap-[30px]">
            <h3 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-[0] leading-tight md:leading-[46px] lg:leading-[54px]">
              <span className="text-[#2c2c2c]">AI-Driven </span>
              <span className="text-[#3e96ff]">Solutions</span>
              <span className="text-[#2c2c2c]"> for Every Need</span>
            </h3>

            <ul className="flex flex-col gap-3 md:gap-3 lg:gap-5 list-disc pl-6 md:pl-6 lg:pl-8">
              {solutionsList.map((solution, index) => (
                <li
                  key={index}
                  className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#2c2c2c] text-lg sm:text-xl md:text-xl lg:text-[26px] tracking-[-0.78px] leading-[normal]"
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
