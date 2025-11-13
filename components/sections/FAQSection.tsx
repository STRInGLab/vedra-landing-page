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
    <section className="w-full gap-[60px] px-[360px] py-[140px] flex flex-col items-center justify-center">
      <Card className="w-full max-w-[1200px] bg-white rounded-2xl border border-solid border-[#e6e9ee] shadow-[0px_4px_10px_#c9d2f526,0px_0px_2px_#0325b012,0px_2px_4px_#042fe20a]">
        <CardContent className="flex items-start justify-between px-[30px] py-10 gap-8">
          <div className="flex flex-col w-[307px] items-start gap-[15px] flex-shrink-0">
            <Badge
              variant="secondary"
              className="w-fit bg-[#f8f9fa] rounded border border-solid border-[#e6e9ee] px-2.5 py-1.5 h-auto"
            >
              <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-neutral-600 text-sm tracking-[0] leading-[21px]">
                FAQ&apos;s
              </span>
            </Badge>

            <h2 className="self-stretch [font-family:'Instrument_Sans',Helvetica] font-medium text-[#161618] text-[38px] tracking-[-1.33px] leading-[48px]">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col w-[272px] items-start gap-4">
              <div className="flex flex-col items-start gap-1.5 w-full">
                <h3 className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#161618] text-xl tracking-[0] leading-[28.8px]">
                  Still have a question?
                </h3>

                <div className="flex items-center gap-[5px] w-full">
                  <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#161618] text-base tracking-[0] leading-[26px]">
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
              className="w-[124px] h-auto px-0 py-3.5 bg-white rounded border border-solid border-[#e4e5e6]"
            >
              <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#161618] text-sm tracking-[-0.04px]">
                Contact Us
              </span>
            </Button>
          </div>

          <div className="flex flex-col w-[750px] items-start gap-5 flex-shrink-0">
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
                  <AccordionTrigger className="px-5 py-5 hover:no-underline [&[data-state=open]]:pb-0">
                    <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#2c2c2c] text-lg tracking-[-0.18px] text-left">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  {faq.answer && (
                    <AccordionContent className="px-5 pb-5 pt-5">
                      <p className="[font-family:'Instrument_Sans',Helvetica] font-normal text-[#2c2c2ccc] text-base tracking-[-0.36px] leading-6">
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
