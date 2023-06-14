import { memo } from "react";
import Link from "next/link";

const Header = (props) => {
  return (
    <div className="header top:0 fixed z-30 mx-auto h-[56px] w-full bg-slate-100 lg:h-[76px]">
      <div className="container relative mx-auto h-full px-8 py-4">
        <nav className="flex items-center">
          <Link href="/" className="px-2 py-2 text-sm text-indigo-600 underline hover:text-indigo-400">
            <span>Home</span>
          </Link>
          <Link href="/category/react" className="px-2 py-2 text-sm text-indigo-600 underline hover:text-indigo-400">
            <span>Category: React</span>
          </Link>
          <Link
            href="/category/bootstrap"
            className="px-2 py-2 text-sm text-indigo-600 underline hover:text-indigo-400"
          >
            <span>Category: Bootstrap</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default memo(Header);
