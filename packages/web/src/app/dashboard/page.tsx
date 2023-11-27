"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Market } from "./components/Market";
import { MyAssets } from "./components/MyAssets";
import StatCard from "./components/StatCard";

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Example dashboard app built using the components.",
// };

export default function DashboardPage() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="space-y-4 p-8 pt-6">
          <div className="flex gap-x-4">
            <StatCard />
            <Card className="w-1/2">
              <CardHeader>
                <CardTitle>Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <Market />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-7">
              <CardHeader>
                <CardTitle className="font-normal">My Assets</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <MyAssets />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
