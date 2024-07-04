import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-row w-screen h-20 items-center justify-center border-solid border-b border-[#00000010]">
            <div className="w-full max-w-[880px]">
                <div className="flex flex-row gap-4">
                    <Link href="/"><p>Home</p></Link>
                    <Link href="/comic"><p>Comic</p></Link>
                </div>
            </div>
        </div>
    );
}
