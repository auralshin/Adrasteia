"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);
  const routes = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Send Crypto",
      link: "/send",
    },
  ];

  return (
    <aside className="pb-12 bg-background h-screen fixed left-0">
      <div className="space-y-4 py-2">
        <div className="px-0 py-2">
          <h2 className="mb-3 px-4 text-3xl font-semibold tracking-tight">
            Adrasteia
          </h2>
          <div className="space-y-1 mx-4">
            {routes.map((route) => (
              <Link href={route.link}>
                <Button
                  className={`w-full text-white rounded-xl my-2 justify-start ${
                    route.link !== pathname && "bg-transparent"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                  {route.name}
                </Button>
              </Link>
            ))}

            {/* <Button
              variant="secondary"
              className="w-full rounded-none justify-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              Send
            </Button> */}
          </div>
        </div>
      </div>
    </aside>
  );
}
