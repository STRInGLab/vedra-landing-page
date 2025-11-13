import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const featureCards = [
  {
    id: 1,
    title: "Secure by Design Whitelisted domains & tokens.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm.",
    gradient:
      "bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(240,152,142,1)_100%)]",
    imageUrl: "/figmaAssets/ai-assist.png",
    imageClass: "w-[503.57px] h-[364.29px] ml-[-2.68px] mr-[-2.68px]",
    imageRounded: "rounded-[12.86px_12.86px_0px_0px]",
  },
  {
    id: 2,
    title: "1-Click Deployment – Embed anywhere",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm.",
    gradient:
      "bg-[linear-gradient(204deg,rgba(128,205,213,1)_0%,rgba(255,255,255,1)_100%)]",
    imageUrl: "/figmaAssets/process.png",
    imageClass: "w-full h-[418.93px]",
    imageRounded: "rounded-[16.07px_16.07px_0px_0px]",
  },
];

const bottomFeatureCards = [
  {
    id: 3,
    title: "Integrations – WhatsApp,etc",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm.",
    gradient:
      "bg-[linear-gradient(30deg,rgba(52,162,80,1)_0%,rgba(255,255,255,1)_100%)]",
    hasMultipleImages: true,
  },
  {
    id: 4,
    title: "Multilingual",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm.",
    gradient:
      "bg-[linear-gradient(246deg,rgba(81,1,210,1)_0%,rgba(255,255,255,1)_100%)]",
    imageUrl: "/figmaAssets/multilanguage.png",
    imageClass: "w-[670.71px] h-[414.62px] ml-[-43.39px] mr-[-43.39px]",
    imageRounded: "rounded-[16.07px_16.07px_0px_0px]",
  },
];

export const KeyFeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center pt-0 pb-[70px] px-0 relative">
      <div className="flex flex-col max-w-[1200px] w-full items-center justify-center gap-[60px] px-4">
        <header className="flex flex-col items-start gap-2.5 w-full">
          <Badge
            variant="outline"
            className="h-6 px-3.5 py-1.5 bg-white rounded border-[0.75px] border-[#e4e5e6] shadow-[0px_0.75px_1.5px_#0000000f,0px_0px_0.75px_#00000008]"
          >
            <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-neutral-600 text-xs tracking-[-0.50px]">
              Key Features
            </span>
          </Badge>

          <div className="flex items-center justify-between w-full gap-8 flex-wrap">
            <div className="inline-flex flex-col items-start gap-2.5">
              <h2 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-[#2c2c2c] text-[42px] tracking-[0] leading-[normal]">
                An end-to-end solution
              </h2>

              <div className="w-[446px] flex h-16 items-center gap-2.5 pl-3 pr-0 py-0 bg-[#3e96ff] rounded-[40px_40px_40px_0px]">
                <h2 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-[42px] tracking-[0] leading-[42px]">
                  fOr Conversational AI
                </h2>
              </div>
            </div>

            <p className="flex items-center justify-center w-[518px] [font-family:'Instrument_Sans',Helvetica] font-medium text-[#2c2c2c] text-base tracking-[0] leading-[normal]">
              Effortlessly connect with customers 24/7 using an AI chatbot.{" "}
              <br />
              Integrate with your website, Messenger, LiveChat, or Slack to
              deliver instant, automated assistance on every platform.
            </p>
          </div>
        </header>

        <div className="flex flex-col items-center gap-[30px] w-full">
          <div className="flex items-start gap-[32.14px] w-full">
            {featureCards.map((card) => (
              <Card
                key={card.id}
                className={`flex flex-col h-[617.14px] items-center gap-[42.86px] pt-[42.86px] pb-0 px-[42.86px] flex-1 rounded-[21.43px] overflow-hidden border-[1.07px] border-[#e4e5e6] shadow-[-1.07px_15px_33.21px_#8787871a,-6.43px_61.07px_61.07px_#87878717,-13.93px_137.14px_82.5px_#8787870d,-25.71px_243.21px_97.5px_#87878703] ${card.gradient}`}
              >
                <CardContent className="flex flex-col items-start gap-[21.43px] w-full p-0 z-[1]">
                  <h3 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-[#2c2c2c] text-[38.6px] tracking-[-1.16px] leading-[normal]">
                    {card.title}
                  </h3>

                  <p className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#4a4a4a] text-[17.1px] tracking-[0] leading-[23.6px]">
                    {card.description}
                  </p>
                </CardContent>

                <div
                  className={`relative ${card.imageClass} z-0 bg-white ${card.imageRounded} shadow-[0px_-23.57px_53.57px_#a1a1a10d,0px_-95.36px_95.36px_#a1a1a10a,0px_-215.36px_138.21px_#a1a1a108,0px_-382.5px_153.21px_#a1a1a103]`}
                >
                  <div
                    className={`absolute w-full h-full top-0 left-0 ${card.imageRounded} bg-cover bg-[50%_50%]`}
                    style={{ backgroundImage: `url(${card.imageUrl})` }}
                  />
                  <div
                    className={`${card.imageRounded} ${card.id === 1 ? "border-t-[1.07px] [border-top-style:solid] border-r-[1.07px] [border-right-style:solid] border-l-[1.07px] [border-left-style:solid] border-[#dbdbdb]" : "border-[1.07px] border-solid border-[#f1f1f1]"} absolute w-full h-full top-0 left-0`}
                  />
                </div>
              </Card>
            ))}
          </div>

          <Card className="flex h-[345px] items-center justify-between p-10 w-full rounded-[20px] overflow-hidden border border-solid border-[#e4e5e6] shadow-[-1px_14px_31px_#8787871a,-6px_57px_57px_#87878717,-13px_128px_77px_#8787870d,-24px_227px_91px_#87878703] bg-[linear-gradient(42deg,rgba(255,255,255,1)_0%,rgba(62,151,255,1)_100%)]">
            <CardContent className="inline-flex gap-5 flex-col items-start p-0 z-[1]">
              <h3 className="[font-family:'Manrope',Helvetica] font-bold text-[#2c2c2c] text-4xl tracking-[-1.08px] leading-[41px]">
                AI that Learns Your <br />
                Business - Train on your
                <br />
                data
              </h3>

              <p className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#4a4a4a] text-base tracking-[0] leading-[22px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dumm.
              </p>
            </CardContent>

            <img className="z-0" alt="Images" src="/figmaAssets/images.svg" />
          </Card>

          <div className="flex items-start gap-[32.14px] w-full">
            {bottomFeatureCards.map((card) => (
              <Card
                key={card.id}
                className={`flex flex-col w-[583.93px] h-[617.14px] items-${card.hasMultipleImages ? "start" : "center"} gap-[42.86px] pt-[42.86px] pb-0 px-${card.hasMultipleImages ? "[42.86px]" : "0"} rounded-[21.43px] overflow-hidden border-[1.07px] border-[#e4e5e6] shadow-[-1.07px_15px_33.21px_#8787871a,-6.43px_61.07px_61.07px_#87878717,-13.93px_137.14px_82.5px_#8787870d,-25.71px_243.21px_97.5px_#87878703] ${card.gradient}`}
              >
                <CardContent
                  className={`flex ${card.hasMultipleImages ? "w-full" : "w-[503.57px]"} gap-[21.43px] z-[1] flex-col items-start p-0`}
                >
                  <h3 className="[font-family:'Manrope',Helvetica] font-bold text-[#2c2c2c] text-[38.6px] tracking-[-1.16px] leading-[normal]">
                    {card.title}
                  </h3>

                  <p className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#4a4a4a] text-[17.1px] tracking-[0] leading-[23.6px]">
                    {card.description}
                  </p>
                </CardContent>

                {card.hasMultipleImages ? (
                  <div className="relative w-[508.93px] h-[418.93px] mr-[-10.71px] z-0 rounded-[12.86px_12.86px_0px_0px] shadow-[0px_-23.57px_53.57px_#a1a1a10d,0px_-95.36px_95.36px_#a1a1a10a,0px_-215.36px_138.21px_#a1a1a108,0px_-382.5px_153.21px_#a1a1a103]">
                    <div className="relative -top-1.5 left-[calc(50.00%_-_275px)] w-[553px] h-[371px]">
                      <img
                        className="absolute top-0 left-0 w-[507px] h-[371px]"
                        alt="Rectangle"
                        src="/figmaAssets/rectangle-34626077.png"
                      />
                      <img
                        className="absolute top-3.5 left-[429px] w-[124px] h-[124px]"
                        alt="Rectangle"
                        src="/figmaAssets/rectangle-34626076.png"
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className={`relative ${card.imageClass} z-0 bg-white ${card.imageRounded} shadow-[0px_-23.57px_53.57px_#a1a1a10d,0px_-95.36px_95.36px_#a1a1a10a,0px_-215.36px_138.21px_#a1a1a108,0px_-382.5px_153.21px_#a1a1a103]`}
                  >
                    <div
                      className={`absolute w-full h-full top-0 left-0 ${card.imageRounded} bg-cover bg-[50%_50%]`}
                      style={{ backgroundImage: `url(${card.imageUrl})` }}
                    />
                    <div
                      className={`absolute w-full h-full top-0 left-0 ${card.imageRounded} border-[1.07px] border-solid border-[#f1f1f1]`}
                    />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
