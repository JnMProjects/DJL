import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 h-screen items-center justify-center">
      <Link href="/ui" prefetch>
        <p className="text-center">To UI Docs</p>
      </Link>
      <Link href="/fx" prefetch>
        <p className="text-center">To FX Docs</p>
      </Link>
    </div>
  );
}
