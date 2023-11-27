import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Market() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <div className="space-y-1">
          <p className="text-md font-medium leading-none">ETH</p>
          <p className="text-sm text-muted-foreground">Ethereum</p>
        </div>
        <div className="ml-auto font-medium">$1,999.00</div>
      </div>
      <div className="flex items-center">
        <div className="space-y-1">
          <p className="text-md font-medium leading-none">MATIC</p>
          <p className="text-sm text-muted-foreground">Polygon</p>
        </div>
        <div className="ml-auto font-medium">1,999.00</div>
      </div>{" "}
      <div className="flex items-center">
        <div className="space-y-1">
          <p className="text-md font-medium leading-none">ARB</p>
          <p className="text-sm text-muted-foreground">Arbitrum</p>
        </div>
        <div className="ml-auto font-medium">1,999.00</div>
      </div>{" "}
      <div className="flex items-center">
        <div className="space-y-1">
          <p className="text-md font-medium leading-none">BNB</p>
          <p className="text-sm text-muted-foreground">BNB</p>
        </div>
        <div className="ml-auto font-medium">1,999.00</div>
      </div>{" "}
      <div className="flex items-center">
        <div className="space-y-1">
          <p className="text-md font-medium leading-none">OP</p>
          <p className="text-sm text-muted-foreground">Optimism</p>
        </div>
        <div className="ml-auto font-medium">1,999.00</div>
      </div>
    </div>
  );
}
