import Link from "next/link";

export default function Navbar(){
    return (
        <>
        <nav className="grid text-center divide-x font-semibold font-mono text-xl  grid-cols-4 uppercase">
            <Link href={'/'} className="pt-3">Home</Link>
            <Link href={'/projects'} className="pt-3">Projects</Link>
            <Link href={'/notes'} className="pt-3">Notes</Link>
            <Link href={'/contact'} className="pt-3">Contacts</Link>
        </nav>
        </>
    )
}