"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmailForm from "./components/EmailForm";
import PhoneForm from "./components/PhoneForm";

export default function Send() {
  return (
    <main className="flex min-h-[92vh] flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-semibold mb-8">Send Crypto</h1>
      <Tabs defaultValue="email" className="w-[500px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="phone">Phone</TabsTrigger>
        </TabsList>
        <TabsContent value="email">
          <EmailForm />
        </TabsContent>
        <TabsContent value="phone">
          <PhoneForm />
        </TabsContent>
      </Tabs>
    </main>
  );
}
