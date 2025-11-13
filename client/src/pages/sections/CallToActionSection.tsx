import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const pricingPlans = [
  {
    name: "Free",
    price: "₹0/month",
    description: "1 chatbot, 100 msgs",
  },
  {
    name: "Pro",
    price: "₹999/month",
    description: "3 Bots",
  },
  {
    name: "Business",
    price: "₹4,999/month",
    description: "Unlimited Bots, team support",
  },
];

export const CallToActionSection = (): JSX.Element => {
  const [billingPeriod, setBillingPeriod] = useState("yearly");

  return (
    <section className="w-full flex items-center justify-center bg-[linear-gradient(202deg,rgba(0,0,0,1)_0%,rgba(36,72,128,1)_20%,rgba(0,27,102,1)_30%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_50%,rgba(0,0,0,1)_60%,rgba(0,27,102,1)_70%,rgba(36,72,128,1)_80%,rgba(0,0,0,1)_100%)]">
      <div className="flex max-w-[1200px] w-full items-start justify-between px-4 py-[100px] gap-8">
        <div className="flex flex-col w-[392px] items-start gap-[30px]">
          <div className="flex flex-col items-start justify-center gap-3.5 w-full">
            <Badge className="h-[26px] px-3.5 py-1.5 bg-[#ffffff1a] border-[0.75px] border-[#e4e5e633] shadow-[0px_0.75px_1.5px_#0000000f,0px_0px_0.75px_#00000008] text-white text-xs [font-family:'Instrument_Sans',Helvetica] font-normal tracking-[-0.50px] hover:bg-[#ffffff1a]">
              Pricing
            </Badge>

            <div className="flex flex-col h-[122px] items-start justify-between w-full">
              <h2 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-[42px] tracking-[0] leading-[normal]">
                Pricing that
              </h2>

              <div className="inline-flex h-16 items-center gap-2.5 pl-3 pr-4 py-0 bg-[#3e96ff] rounded-[40px_40px_40px_0px]">
                <span className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-[42px] tracking-[0] leading-[normal]">
                  scales with you
                </span>
              </div>
            </div>
          </div>

          <p className="[font-family:'Instrument_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
            Lorem ipsum is a standard placeholder text used in design,
            publishing, and web development to show the layout of a page before
            the final content is ready.
          </p>
        </div>

        <div className="inline-flex flex-col items-start gap-[30px]">
          <div className="flex w-[640px] items-center justify-end gap-2.5">
            <p className="[font-family:'Instrument_Sans',Helvetica] text-xs tracking-[0] leading-3">
              <span className="font-bold text-white leading-[15px]">
                Save 15%
              </span>
              <span className="font-medium text-white leading-[15px]">
                {" "}
                on yearly plan!
              </span>
            </p>

            <ToggleGroup
              type="single"
              value={billingPeriod}
              onValueChange={(value) => {
                if (value) setBillingPeriod(value);
              }}
              className="w-[170px] p-1 bg-white rounded-[100px] border border-solid border-zinc-200"
            >
              <ToggleGroupItem
                value="yearly"
                className="w-[74px] px-4 py-2 bg-blue-600 rounded-[100px] data-[state=on]:bg-blue-600 data-[state=off]:bg-transparent [font-family:'Instrument_Sans',Helvetica] font-semibold text-sm tracking-[0] leading-[16.1px] whitespace-nowrap data-[state=on]:text-white data-[state=off]:text-zinc-400"
              >
                Yearly
              </ToggleGroupItem>
              <ToggleGroupItem
                value="monthly"
                className="px-4 py-2 rounded-[100px] data-[state=on]:bg-blue-600 data-[state=off]:bg-transparent [font-family:'Instrument_Sans',Helvetica] font-semibold text-sm tracking-[0] leading-[16.1px] whitespace-nowrap data-[state=on]:text-white data-[state=off]:text-zinc-400"
              >
                Monthly
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className="w-[640px] h-[123px] bg-[#ffffff33] rounded-[10px] border border-solid border-[#e4e5e6] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]"
            >
              <CardContent className="flex items-center justify-between px-10 py-0 h-full">
                <h3 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-4xl tracking-[0] leading-[normal]">
                  {plan.name}
                </h3>

                <div className="inline-flex flex-col h-[72px] items-end justify-between">
                  <Badge className="h-auto px-2.5 py-[9px] bg-[#3e96ff] rounded hover:bg-[#3e96ff]">
                    <span className="[font-family:'Instrument_Sans',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[16.1px] whitespace-nowrap">
                      {plan.price}
                    </span>
                  </Badge>

                  <p className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[normal]">
                    {plan.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
