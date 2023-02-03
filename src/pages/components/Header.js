import Link from "next/link";
import { useRouter } from "next/router";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  PlayIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  PuzzlePieceIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import NextFBlogo from "../components/svg/nextfb_logo_v2.svg";
import Image from "next/image";

const navlinks = [
  {
    id: "1",
    path: "/",
    name: "Home",
    icon: <HomeIcon className="h-7 w-7" />,
  },
  {
    id: "2",
    path: "/watch",
    name: "Watch",
    icon: <PlayIcon className="h-7 w-7" />,
  },
  {
    id: "3",
    path: "/marketplace",
    name: "Market Place",
    icon: <BuildingStorefrontIcon className="h-7 w-7" />,
  },
  {
    id: "4",
    path: "/groups",
    name: "Groups",
    icon: <UserGroupIcon className="h-7 w-7" />,
  },
  {
    id: "5",
    path: "/gaming",
    name: "Gaming",
    icon: <PuzzlePieceIcon className="h-7 w-7" />,
  },
];

export default function Header({ children }) {
  const router = useRouter();
  const [expand, setExpand] = useState(false);

  return (
    <>
      <div className="w-full top-0 left-0 right-0 z-10 shadow-md px-5 sticky bg-white">
        {/* for desktop */}
        <div className="w-full m-auto pt-1 lg:grid lg:grid-cols-3">
          <div className="col-span-1 hidden lg:flex my-auto justify-start">
            <NextFBlogo className="text-4xl my-auto mr-2" />

            <span className="bg-gray-200 flex h-9 w-9 pl-2 rounded-l-full">
              <MagnifyingGlassIcon className="p-1 h-7 w-7 my-auto" />
            </span>
            <input
              type="text"
              placeholder="Search on NextFB"
              className="bg-gray-200 rounded-r-full px-2 focus-within:outline-none"
            />
          </div>

          <div className="col-span-1 hidden md:flex mx-auto justify-center ">
            {navlinks.map((links) => {
              return (
                <p
                  className={
                    "text-gray-500 py-2 px-6 mx-3 justify-center " +
                    (router.pathname === links.path
                      ? " border-b-4 border-blue-600 text-blue-600 "
                      : " hover:bg-gray-100 rounded-xl mb-1 ")
                  }
                  key={links.id}
                >
                  <Link href={links.path}>{links.icon}</Link>
                </p>
              );
            })}
          </div>

          <div className="col-span-1 hidden lg:flex my-auto justify-end text-gray-700">
            <button>
              <Image
                className="w-9 h-9 rounded-full mr-4 object-contain"
                src={`/nextfb_logo_v2.png`}
                alt="create story"
                width="36"
                height="36"
              />
            </button>
          </div>
        </div>

        {/* for mobile */}
        <div className="lg:hidden mx-auto pb-2">
          {/* MOBILE - HAMBURGER (START) */}
          <div className="lg:hidden my-auto flex w-full">
            <NextFBlogo className="md:hidden justify-start mt-2 text-4xl my-auto mr-2" />
            <button
              className="flex w-full m-auto justify-end"
              onClick={() => setExpand(!expand)}
            >
              {!expand ? (
                <Bars3Icon className="h-8 w-8 text-black" />
              ) : (
                <XMarkIcon className="h-8 w-8 text-black" />
              )}
            </button>
          </div>
          {/* MOBILE - HAMBURGER (END) */}

          <div>
            {expand &&
              navlinks.map((links) => {
                return (
                  <p
                    className={
                      "p-2 m-1 rounded-md" +
                      (router.pathname === links.path
                        ? " font-medium text-blue-600 "
                        : " text-gray-600 ")
                    }
                    key={links.id}
                  >
                    <Link href={links.path} onClick={() => setExpand(!expand)}>
                      {links.name}
                    </Link>
                  </p>
                );
              })}
          </div>
        </div>
        {expand && (
          <div className="px-3 py-2 hover:text-blue-600">
            <button className="hover:text-blue-600">
              <Link href="/login">Login</Link>
            </button>
          </div>
        )}
      </div>
      <div className="main-content">{children}</div>
    </>
  );
}
