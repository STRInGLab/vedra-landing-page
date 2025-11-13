import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const testimonialColumns = [
  [
    {
      avatar: "/figmaAssets/ltcxorvzofu5530nmxtia8cqvwg-png.png",
      name: "Smutchings",
      handle: "@Smutchings",
      text: '"The AI assistant has revolutionized our customer service! It provides quick, accurate responses that enhance user satisfaction. Our interactions with customers have improved significantly, making their experience seamless and enjoyable. There\'s no going back to the old methods!"',
    },
    {
      avatar: "/figmaAssets/ltcxorvzofu5530nmxtia8cqvwg-png-1.png",
      name: "Jordan Kicklighter",
      handle: "@jwkicklighter",
      text: "\"This chatbot has truly transformed our operations! Its speed and accuracy have significantly improved our customer interactions, making them smoother and more efficient. We've noticed a remarkable increase in customer satisfaction since implementing it. The ease of use and the seamless integration into our existing systems have made it an invaluable tool for our team. We can now handle inquiries faster and more effectively.",
    },
    {
      avatar: "/figmaAssets/ltcxorvzofu5530nmxtia8cqvwg-png-2.png",
      name: "Mac Pankiewicz",
      handle: "@macpankiewiczs",
      text: '"We\'ve experienced remarkable improvements in customer interactions—immediate responses, precise answers, and effortless integration!"',
    },
  ],
  [
    {
      avatar: "/figmaAssets/ltcxorvzofu5530nmxtia8cqvwg-png-3.png",
      name: "Matthew",
      handle: "@matthewmorek",
      text: '"This chatbot is incredibly efficient, making our support system faster and more reliable than ever!"',
    },
    {
      avatar: "/figmaAssets/ltcxorvzofu5530nmxtia8cqvwg-png-4.png",
      name: "Jordan Kicklighter",
      handle: "@jwkicklighter",
      text: '"Our AI assistant has revolutionized our customer service! It delivers quick responses and facilitates seamless communication, making it easier for us to assist our clients. The efficiency and effectiveness of our support have significantly improved, leading to higher customer satisfaction. We can now handle inquiries faster than ever, ensuring that our customers feel valued and heard. This technology has truly been a game-changer for our team, allowing us to focus on building relationships while the AI takes care of routine queries. We couldn\'t be happier with the results!"',
    },
    {
      avatar: "/figmaAssets/ltcxorvzofu5530nmxtia8cqvwg-png-5.png",
      name: "Mac Pankiewicz",
      handle: "@macpankiewicz",
      text: '"Our customer engagement has soared! We\'re excited about the quick responses, precise information, and smooth integration that have revolutionized our interactions. This has significantly enhanced our service quality, making a noticeable impact on our customer satisfaction!"',
    },
  ],
  [
    {
      avatar: "/figmaAssets/ltcxorvzofu5530nmxtia8cqvwg-png-6.png",
      name: "Nick Heer",
      handle: "@nickheer",
      text: '"The AI chatbot has revolutionized our workflow, ensuring seamless communication and timely responses that keep our customers happy!"',
    },
    {
      avatar: "/figmaAssets/ltcxorvzofu5530nmxtia8cqvwg-png-7.png",
      name: "Blake",
      handle: "@blake_cricht0n",
      text: "\"This chatbot has revolutionized our business operations! Its speed and accuracy have transformed how we communicate with customers, making interactions smoother than ever. We've seen a significant improvement in customer satisfaction since implementing it. The ease of use and reliability of this tool have made it an invaluable asset to our team. I can't recommend it enough for anyone looking to enhance their customer service experience!\"",
    },
    {
      avatar: "/figmaAssets/ltcxorvzofu5530nmxtia8cqvwg-png-8.png",
      name: "Smutchings",
      handle: "@Smutchings",
      text: '"The chatbot has become an essential part of our operations, delivering quick and effective support that enhances customer satisfaction!"',
    },
  ],
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center justify-center px-4 md:px-12 lg:px-16 py-8 md:py-12 lg:py-[50px]">
      <div className="flex flex-col max-w-[1200px] w-full items-center justify-center gap-8 md:gap-10 lg:gap-[50px] px-0 py-8 md:py-12 lg:py-[50px]">
        <div className="self-stretch w-full flex flex-col items-start gap-2.5">
          <Badge
            variant="outline"
            className="inline-flex h-6 items-center justify-center gap-[1.07e-14px] px-3.5 py-1.5 bg-white rounded border-[0.75px] border-solid border-[#e4e5e6] shadow-[0px_0.75px_1.5px_#0000000f,0px_0px_0.75px_#00000008]"
          >
            <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-neutral-600 text-xs text-center tracking-[-0.50px] leading-[normal]">
              Testimonial
            </span>
          </Badge>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-4 lg:gap-8">
            <div className="inline-flex flex-col items-start gap-2.5 w-full lg:w-auto">
              <h2 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-[#2c2c2c] text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] tracking-[0] leading-[normal]">
                What our client
              </h2>

              <div className="inline-flex h-12 sm:h-14 md:h-14 lg:h-16 items-center gap-2.5 pl-3 pr-4 py-0 bg-[#3e96ff] rounded-[40px_40px_40px_0px]">
                <h2 className="[font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] tracking-[0] leading-[normal]">
                  Says about us
                </h2>
              </div>
            </div>

            <p className="w-full lg:w-[518px] [font-family:'Instrument_Sans',Helvetica] font-normal text-[#2c2c2c] text-sm sm:text-base tracking-[0] leading-[normal]">
              Effortlessly connect with customers 24/7 using an AI chatbot.{" "}
              <br className="hidden sm:inline" />
              Integrate with your website, Messenger, LiveChat, or Slack to
              deliver instant, automated assistance on every platform.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full items-start justify-between gap-5">
          {testimonialColumns.map((column, columnIndex) => (
            <div
              key={`column-${columnIndex}`}
              className={`inline-flex flex-col items-start gap-5 w-full md:flex-1 ${columnIndex === 2 ? 'hidden lg:flex' : ''}`}
            >
              {column.map((testimonial, testimonialIndex) => (
                <Card
                  key={`testimonial-${columnIndex}-${testimonialIndex}`}
                  className="flex flex-col w-full items-start gap-5 bg-white rounded-[10px] border border-solid border-[#e6e9ee]"
                >
                  <CardContent className="flex flex-col w-full items-start gap-5 px-5 md:px-6 py-4 md:py-[18px]">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="object-cover"
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col items-start justify-between">
                        <div className="font-loombot-framer-website-manrope-bold font-[number:var(--loombot-framer-website-manrope-bold-font-weight)] text-[#2c2c2c] text-[length:var(--loombot-framer-website-manrope-bold-font-size)] text-center tracking-[var(--loombot-framer-website-manrope-bold-letter-spacing)] leading-[var(--loombot-framer-website-manrope-bold-line-height)] whitespace-nowrap [font-style:var(--loombot-framer-website-manrope-bold-font-style)]">
                          {testimonial.name}
                        </div>

                        <div className="[font-family:'Manrope',Helvetica] font-normal text-[#a9a9a9] text-xs tracking-[0] leading-[16.8px] whitespace-nowrap">
                          {testimonial.handle}
                        </div>
                      </div>
                    </div>

                    <p className="[font-family:'Instrument_Sans',Helvetica] font-medium text-[#2c2c2c] text-sm tracking-[0] leading-[19px]">
                      {testimonial.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
