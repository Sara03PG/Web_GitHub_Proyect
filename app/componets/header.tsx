import Link from "next/link";

export default function Header () {
    return (
        <div className="border-black/15 border-b h-[50px] flex items-center justify-between px-10 text-lg">
            <div className="flex items-center">Moonlight Landing</div>

            <ul className="flex items-center gap-3">
                <li className="flex items-center">
                    <Link href="/">Home</Link>
                </li>
                <li className="flex items-center">
                    <Link href="/myinfo">About me</Link>
                </li>
            </ul>
        </div>
    );
}