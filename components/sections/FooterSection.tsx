import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const productLinks = [
  { label: "Home" },
  { label: "Features" },
  { label: "Use-case" },
  { label: "How It Works" },
  { label: "Pricing" },
];

const resourceLinks = [
  { label: "Help Center" },
  { label: "API & Developers" },
  { label: "Blog" },
  { label: "Privacy Policy" },
  { label: "Term & Conditions" },
  { label: "Manage Cookies" },
];

const features = [
  { text: "Free 14-Day trial" },
  { text: "No Credit card required" },
  { text: "24/7 Customer Support" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#161618] flex items-center justify-center py-[50px]">
      <div className="flex flex-col w-full max-w-[1200px] items-center gap-[50px] px-4">
        <div className="flex items-start justify-between gap-[100px] w-full">
          <div className="flex items-start gap-10 flex-1">
            <nav className="flex flex-col items-start gap-[30px]">
              <h3 className="font-loombot-framer-website-manrope-semibold font-[number:var(--loombot-framer-website-manrope-semibold-font-weight)] text-[#3e96ff] text-[length:var(--loombot-framer-website-manrope-semibold-font-size)] tracking-[var(--loombot-framer-website-manrope-semibold-letter-spacing)] leading-[var(--loombot-framer-website-manrope-semibold-line-height)] [font-style:var(--loombot-framer-website-manrope-semibold-font-style)]">
                ( Product )
              </h3>
              <ul className="flex flex-col items-start gap-2.5">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-loombot-framer-website-manrope-semibold font-[number:var(--loombot-framer-website-manrope-semibold-font-weight)] text-white text-[length:var(--loombot-framer-website-manrope-semibold-font-size)] tracking-[var(--loombot-framer-website-manrope-semibold-letter-spacing)] leading-[var(--loombot-framer-website-manrope-semibold-line-height)] [font-style:var(--loombot-framer-website-manrope-semibold-font-style)] hover:text-[#3e96ff] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col items-start gap-[30px]">
              <h3 className="font-loombot-framer-website-manrope-semibold font-[number:var(--loombot-framer-website-manrope-semibold-font-weight)] text-[#3e96ff] text-[length:var(--loombot-framer-website-manrope-semibold-font-size)] tracking-[var(--loombot-framer-website-manrope-semibold-letter-spacing)] leading-[var(--loombot-framer-website-manrope-semibold-line-height)] [font-style:var(--loombot-framer-website-manrope-semibold-font-style)]">
                ( Resources )
              </h3>
              <ul className="flex flex-col items-start gap-2.5">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-loombot-framer-website-manrope-semibold font-[number:var(--loombot-framer-website-manrope-semibold-font-weight)] text-white text-[length:var(--loombot-framer-website-manrope-semibold-font-size)] tracking-[var(--loombot-framer-website-manrope-semibold-letter-spacing)] leading-[var(--loombot-framer-website-manrope-semibold-line-height)] [font-style:var(--loombot-framer-website-manrope-semibold-font-style)] hover:text-[#3e96ff] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col items-end gap-[25px] flex-1">
            <div className="flex items-center gap-[30px]">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <CheckIcon className="w-4 h-4 text-white" />
                  <span className="[font-family:'Manrope',Helvetica] font-normal text-white text-xs tracking-[0] leading-[16.8px] whitespace-nowrap">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <h2 className="font-loombot-framer-website-semantic-heading-4 font-[number:var(--loombot-framer-website-semantic-heading-4-font-weight)] text-white text-[length:var(--loombot-framer-website-semantic-heading-4-font-size)] tracking-[var(--loombot-framer-website-semantic-heading-4-letter-spacing)] leading-[var(--loombot-framer-website-semantic-heading-4-line-height)] [font-style:var(--loombot-framer-website-semantic-heading-4-font-style)] text-right">
              Get a free Loombot trial <br />
              and become one of them
            </h2>

            <form className="flex items-center gap-[5px] w-full bg-[#434343] rounded-xl p-[5px] pl-2.5">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-[45px] bg-transparent border-0 text-white placeholder:text-white [font-family:'Instrument_Sans',Helvetica] font-normal text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button
                type="submit"
                className="w-[175px] h-[45px] bg-[#3e96ff] hover:bg-[#3e96ff]/90 rounded-xl font-loombot-framer-website-semantic-button font-[number:var(--loombot-framer-website-semantic-button-font-weight)] text-white text-[length:var(--loombot-framer-website-semantic-button-font-size)] tracking-[var(--loombot-framer-website-semantic-button-letter-spacing)] leading-[var(--loombot-framer-website-semantic-button-line-height)] [font-style:var(--loombot-framer-website-semantic-button-font-style)]"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center gap-[306.73px] w-full h-[68px] border-t border-[#ffffff26]">
          <div className="flex items-center gap-5 h-[30px]">
            <div className="w-[82px] h-[27.87px] bg-[url(/figmaAssets/vedra-logo-white-1-1.png)] bg-cover bg-center" />
            <div className="w-0.5 h-4 bg-white" />
            <p className="font-loombot-framer-website-manrope-regular font-[number:var(--loombot-framer-website-manrope-regular-font-weight)] text-white text-[length:var(--loombot-framer-website-manrope-regular-font-size)] tracking-[var(--loombot-framer-website-manrope-regular-letter-spacing)] leading-[var(--loombot-framer-website-manrope-regular-line-height)] [font-style:var(--loombot-framer-website-manrope-regular-font-style)] whitespace-nowrap">
              © Vedra. All Rights Reserved. Licensing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
