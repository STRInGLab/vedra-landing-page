import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const workflowCards = [
  {
    title: "Create",
    description:
      "Pick a template or start from scratch Pick a template or start from scratch",
    backgroundImage: "/figmaAssets/rectangle-34626079-2.png",
    mainImage: "/figmaAssets/rectangle-34626080.png",
    hasOverlay: true,
    overlayContent: {
      aiChatImage: "/figmaAssets/ai-chat-1.png",
      messages: [
        "Hi there! I'm Vedra.",
        "I'm here to help. How can l assist you today? I can provide you with information on a wide range of topics.",
      ],
    },
  },
  {
    title: "Train",
    description:
      "Upload documents or data sources or choose any input artifacts.",
    backgroundImage: "/figmaAssets/rectangle-34626079-2.png",
    mainImage: "/figmaAssets/rectangle-34626080-1.png",
    hasOverlay: false,
  },
  {
    title: "Deploy",
    description:
      "Copy the embed code and go live. Copy the embed code and go live.",
    backgroundImage: "/figmaAssets/rectangle-34626079-2.png",
    mainImage: "/figmaAssets/rectangle-34626080-2.png",
    hasOverlay: false,
  },
];

export const InterviewWorkflowSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 md:gap-12 lg:gap-[60px] pt-0 pb-12 md:pb-20 lg:pb-[100px] px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="w-full max-w-[1200px] flex flex-col items-start gap-2.5">
        <Badge
          variant="outline"
          className="h-6 px-3.5 py-1.5 bg-white rounded border-[0.75px] border-[#e4e5e6] shadow-[0px_0.75px_1.5px_#0000000f,0px_0px_0.75px_#00000008]"
        >
          <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-neutral-600 text-xs tracking-[-0.50px]">
            Testimonial
          </span>
        </Badge>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-4 lg:gap-8">
          <div className="inline-flex flex-col items-start gap-2.5 w-full lg:w-auto">
            <h2 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-[#2c2c2c] text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] tracking-[0] leading-[normal]">
              What our client
            </h2>

            <div className="inline-flex h-12 sm:h-14 md:h-14 lg:h-16 items-center gap-2.5 pl-3 pr-4 py-0 bg-[#3e96ff] rounded-[40px_40px_40px_0px]">
              <span className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] tracking-[0] leading-[normal]">
                Says about us
              </span>
            </div>
          </div>

          <p className="w-full lg:w-[518px] [font-family:'Instrument_Sans',Helvetica] font-normal text-[#2c2c2c] text-sm sm:text-base tracking-[0] leading-[normal]">
            Effortlessly connect with customers 24/7 using an AI chatbot. <br className="hidden sm:inline" />
            Integrate with your website, Messenger, LiveChat, or Slack to
            deliver instant, automated assistance on every platform.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-[1200px] gap-5 md:gap-4 lg:gap-4">
        {workflowCards.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col w-full bg-white rounded-[20px] border border-solid border-[#e6e9ee]"
          >
            <CardContent className="flex flex-col items-center justify-center gap-5 px-5 md:px-[22px] py-6">
              <div className="flex flex-col min-h-[74px] items-start justify-between w-full">
                <h3 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-[#2c2c2c] text-xl md:text-[22px] tracking-[-0.22px] leading-[normal]">
                  {card.title}
                </h3>

                <p className="[font-family:'Instrument_Sans',Helvetica] font-normal text-[#2c2c2c] text-sm md:text-base tracking-[0] leading-[21px]">
                  {card.description}
                </p>
              </div>

              <div
                className="relative w-full h-48 sm:h-56 md:h-60 rounded-[10px] overflow-hidden bg-cover bg-[50%_50%]"
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              >
                <img
                  className={`${card.title === "Deploy" ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 sm:w-52 md:w-[250px] h-auto" : "absolute top-0 left-0 w-full md:w-[342px] h-full"} object-cover`}
                  alt={card.title}
                  src={card.mainImage}
                />

                {card.hasOverlay && card.overlayContent && (
                  <>
                    <div className="absolute top-16 sm:top-20 md:top-[101px] left-6 sm:left-8 md:left-[38px] w-10 sm:w-12 md:w-[50px] h-10 sm:h-12 md:h-[50px] flex bg-[linear-gradient(180deg,rgba(255,182,198,0)_72%,rgba(255,182,198,1)_100%)]">
                      <img
                        className="flex-1 w-full object-cover"
                        alt="Ai chat"
                        src={card.overlayContent.aiChatImage}
                      />
                    </div>

                    <div className="inline-flex flex-col items-center justify-center gap-1 p-2 sm:p-2.5 absolute top-24 sm:top-32 md:top-[156px] left-5 sm:left-6 md:left-[29px] bg-white rounded">
                      {card.overlayContent.messages.map((message, msgIndex) => (
                        <p
                          key={msgIndex}
                          className="w-full max-w-[180px] sm:max-w-[200px] md:w-[216px] [font-family:'Instrument_Sans',Helvetica] font-medium text-black text-[8px] sm:text-[9px] tracking-[-0.09px] leading-[normal]"
                        >
                          {message}
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
