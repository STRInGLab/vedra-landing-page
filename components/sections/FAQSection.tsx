import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const faqData = [
  {
    id: "item-1",
    question: "What is an AI agent builder?",
    answer: null,
  },
  {
    id: "item-2",
    question: "How much does an AI chatbot cost?",
    answer:
      "A no-code platform that turns your documents into smart chatbots in minutes.",
  },
  {
    id: "item-3",
    question: "How much does an AI chatbot cost?",
    answer: null,
  },
  {
    id: "item-4",
    question: "Can I build an AI agent without coding?",
    answer: null,
  },
  {
    id: "item-5",
    question: "How do I deploy on my website or WhatsApp?",
    answer: null,
  },
  {
    id: "item-6",
    question: "What are the best platforms for creating AI chatbots?",
    answer: null,
  },
];

export const FAQSection = (): JSX.Element => {
  return (
    <section className="w-full gap-8 md:gap-12 lg:gap-[60px] px-4 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24 lg:py-[140px] flex flex-col items-center justify-center">
      <Card className="w-full max-w-[1200px] bg-white rounded-2xl border border-solid border-[#e6e9ee] shadow-[0px_4px_10px_#c9d2f526,0px_0px_2px_#0325b012,0px_2px_4px_#042fe20a]">
        <CardContent className="flex flex-col md:flex-row items-start justify-between px-5 sm:px-6 md:px-[30px] py-8 md:py-10 gap-6 md:gap-8">
          <div className="flex flex-col w-full md:w-[307px] items-start gap-4 md:gap-[15px] md:flex-shrink-0">
            <Badge
              variant="secondary"
              className="w-fit bg-[#f8f9fa] rounded border border-solid border-[#e6e9ee] px-2.5 py-1.5 h-auto"
            >
              <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-neutral-600 text-sm tracking-[0] leading-[21px]">
                FAQ&apos;s
              </span>
            </Badge>

            <h2 className="self-stretch [font-family:'Instrument_Sans',Helvetica] font-medium text-[#161618] text-2xl sm:text-3xl md:text-[38px] tracking-[-1.33px] leading-tight md:leading-[48px]">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col w-full md:w-[272px] items-start gap-4">
              <div className="flex flex-col items-start gap-1.5 w-full">
                <h3 className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#161618] text-lg md:text-xl tracking-[0] leading-[28.8px]">
                  Still have a question?
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-[5px] w-full">
                  <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#161618] text-sm sm:text-base tracking-[0] leading-[26px]">
                    Contact us!
                  </span>

                  <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-[#161618] text-sm tracking-[0] leading-[26px]">
                    We&#39;ll be happy to help you.
                  </span>
                </div>
              </div>

              <div className="w-[111.5px] h-[46.78px] bg-[url(/figmaAssets/lot2pcgmdckmgzkf93ypbkmnodu-png.png)] bg-cover bg-[50%_50%]" />
            </div>

            <Button
              variant="outline"
              className="w-full sm:w-[124px] h-auto px-4 sm:px-0 py-3.5 bg-white rounded border border-solid border-[#e4e5e6]"
            >
              <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#161618] text-sm tracking-[-0.04px]">
                Contact Us
              </span>
            </Button>
          </div>

          <div className="flex flex-col w-full md:w-[750px] items-start gap-5 md:flex-shrink-0">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-2"
              className="w-full space-y-5"
            >
              {faqData.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-[#f8f9fa] rounded-lg overflow-hidden border-none"
                >
                  <AccordionTrigger className="px-4 md:px-5 py-4 md:py-5 hover:no-underline [&[data-state=open]]:pb-0">
                    <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#2c2c2c] text-base md:text-lg tracking-[-0.18px] text-left">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  {faq.answer && (
                    <AccordionContent className="px-4 md:px-5 pb-4 md:pb-5 pt-4 md:pt-5">
                      <p className="[font-family:'Instrument_Sans',Helvetica] font-normal text-[#2c2c2ccc] text-sm md:text-base tracking-[-0.36px] leading-6">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
