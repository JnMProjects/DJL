"use client";
import Link from "next/link";
import { cldefault } from "@jackatdjl/djl-ui";

export default function Page() {
  return (
    <ul className="grid grid-cols-1 gap-4">
      <li>
        <Link href="/ui/button" prefetch>
          <p className={cldefault.cldText}>Button Page</p>
        </Link>
      </li>
    </ul>
  );
}
