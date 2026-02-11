"use client"
import Link from "next/link";
import DecryptedText from "./DecryptedText";

export default function Navbar() {
  return (
    <>
      <nav className="grid text-center divide-x font-semibold text-xl  grid-cols-4 uppercase font-mono">
        <Link href={"/"} className="pt-3">
          <DecryptedText
          text="Home"
          speed={80}
          animateOn="view"
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
        />
        </Link>
        

        <Link href={"/projects"} className="pt-3">
          <DecryptedText
          text="Projects"
          speed={80}
          animateOn="view"
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
        />
        </Link>
        <Link href={"/notes"} className="pt-3">
          <DecryptedText
          text="notes"
          speed={80}
          animateOn="view"
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
        />
        </Link>
        <Link href={"/contact"} className="pt-3">
          <DecryptedText
          text="contacts"
          speed={80}
          animateOn="view"
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
        />
        </Link>
      </nav>
    </>
  );
}
