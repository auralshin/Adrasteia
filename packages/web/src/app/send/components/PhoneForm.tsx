"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SelectSearch from "@/common/SelectSearch";

const supportedCurrencies = [
  {
    label: "ETH",
    value: "eth",
  },
  {
    label: "MATIC",
    value: "matic",
  },
];

const PhoneForm = () => {
  const [sendCurrency, setSendCurrency] = React.useState<string>("");
  const [receiveCurrency, setReceiveCurrency] = React.useState<string>("");
  return (
    <Card>
      <CardHeader>
        <CardTitle>Send via Phone Number</CardTitle>
        <CardDescription>
          Send crypto to your contacts using phone number.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="amount">You want to send</Label>

          <SelectSearch
            placeholder="Select currency"
            options={supportedCurrencies}
            setValue={setSendCurrency}
            value={sendCurrency}
          />
        </div>{" "}
        <div className="space-y-1">
          <Label htmlFor="amount">You want to receiver to receive</Label>
          <SelectSearch
            placeholder="Select currency"
            options={supportedCurrencies}
            setValue={setReceiveCurrency}
            value={receiveCurrency}
          />
        </div>{" "}
        <div className="space-y-1">
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" type="number" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Send</Button>
      </CardFooter>
    </Card>
  );
};

export default PhoneForm;
