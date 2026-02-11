"use client";
import About from "@/components/About";
import DecryptedText from "@/components/DecryptedText";
import ShinyText from "@/components/ShinyText";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      {/* bannar */}
<div className="w-full top-20 text-center flex z-0 flex-col items-center justify-center ">
          <div className="text-[160px] pl-1 uppercase  font-bold">
            <DecryptedText
              text="Afra Anjum"
              speed={80}
              animateOn="view"
              revealDirection="start"
              sequential
              useOriginalCharsOnly={false}
            />
          </div>
          <div className=" flex gap-2 -mt-6">
            <Badge variant="secondary">
              <ShinyText
                text="Thinker"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </Badge>

            <Badge variant="secondary">
              <ShinyText
                text="Developer"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </Badge>

            <Badge variant="secondary">
              <ShinyText
                text="Night Owl"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </Badge>
          </div>
           </div>

      <About />
    </>
  );
}
