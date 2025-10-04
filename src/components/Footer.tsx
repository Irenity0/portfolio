"use client"

import { GithubIcon, LogIn, LogOut, PlayIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { Spinner } from "./Spinner";

export default function Footer() {
      const [user, setUser] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
 
   const handleLogout = async () => {
    // setLoading(true);
    // try {
    //   const result = await logout(); // client-friendly logout
    //   if (result.success) {
    //     toast.success("Logged out successfully!");
    //     setUser(null);
    //   } else {
    //     toast.error(result.message || "Logout failed.");
    //   }
    // } catch (err) {
    //   console.error(err);
    //   toast.error("Logout failed.");
    // } finally {
    //   setLoading(false);
    // }
    toast.success('uwu')
  };
  return (
    <footer className="flex font-mono shrink-0 items-center w-full mx-auto flex-row justify-between gap-2 py-2 md:py-4 border-t">
      <Link
        target="_blank"
        href="https://github.com/irenity0"
        className="font-bold"
        prefetch={false}
      >
        Afra Anjum
      </Link>

      <div className="flex items-center justify-end gap-4">
        {/* Social Links */}
        <Link
          href="https://x.com/AfraAnjum387893"
          className="h-8 rounded-full border border-stone-200 dark:border-stone-700 w-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
          prefetch={false}
        >
          <span className="sr-only">Twitter</span>
          <TwitterIcon className="w-4 h-4" />
        </Link>

        <Link
          target="_blank"
          href="https://github.com/irenity0"
          className="h-8 rounded-full border border-stone-200 dark:border-stone-700 w-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
          prefetch={false}
        >
          <span className="sr-only">GitHub</span>
          <GithubIcon className="w-4 h-4" />
        </Link>

        <Link
          href="https://www.youtube.com/@SomeoneReader"
          className="h-8 rounded-full border border-stone-200 dark:border-stone-700 w-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
          prefetch={false}
        >
          <span className="sr-only">YouTube</span>
          <PlayIcon className="w-4 h-4" />
        </Link>


        {/* Conditional Login / Logout */}
        {user ? (
          <button
            onClick={handleLogout}
            className="h-8 rounded-full border border-stone-200 dark:border-stone-700 w-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
            disabled={loading}
          >
            {loading ? <Spinner/> : <LogOut className="h-8 rounded-full border border-stone-200 dark:border-stone-700 w-8 hover:scale-125 hover:rotate-12 transition-transform p-2"/>}
          </button>
        ) : (
        <LogIn className="h-8 rounded-full border border-stone-200 dark:border-stone-700 w-8 hover:scale-125 hover:rotate-12 transition-transform p-2"/>
        )}
      </div>
    </footer>
  );
}