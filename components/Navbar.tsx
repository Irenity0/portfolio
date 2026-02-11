"use client"
import Link from "next/link";
import DecryptedText from "./DecryptedText";

export default function Navbar() {
  return (
    <>
      <nav className="grid text-center divide-x font-semibold text-xl  grid-cols-12 uppercase font-mono">
        <div></div>
        <div></div>
        <div></div>
        <div></div>

<Link href={"/"} className="pt-8">
          <DecryptedText
          text="Home"
          speed={80}
          animateOn="view"
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
        />
        </Link>
        <Link href={"/projects"} className="pt-8">
          <DecryptedText
          text="Projects"
          speed={80}
          animateOn="view"
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
        />
        </Link>
        <Link href={"/notes"} className="pt-8">
          <DecryptedText
          text="notes"
          speed={80}
          animateOn="view"
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
        />
        </Link>
        <Link href={"/contact"} className="pt-8">
          <DecryptedText
          text="contacts"
          speed={80}
          animateOn="view"
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
        />
        </Link>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </nav>
    </>
  );
}
