"use client";
import DecryptedText from "@/components/DecryptedText";
import ShinyText from "@/components/ShinyText";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 divide-x relative -z-1">
        <div className="h-screen"></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>

      <div className="absolute w-full h-96 top-20 text-center flex flex-col items-center justify-center ">
        <div className="text-[160px] pl-1 uppercase font-bold">
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

      <div className="grid grid-cols-12 grid-rows-2 divide-x relative">
        <div className="h-96"></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className="text-2xl w-3/12 absolute left-68 -top-30">
          Focused and self-driven developer. Spend most days learning &
          experimenting, with the goal of becoming a strong engineer.Deeply
          curious about psychology, literature, and systems that turn life into
          something intentional and well-structured.
        </div>
      </div>
    </>
  );
}
