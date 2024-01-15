interface Location {
  pathname: string;
  search: string;
  hash: string;
}

export interface Details {
  type: string;
  advice: string;
}

export enum StockHoldStatus {
  IDLE = "IDLE",
  PARTIAL = "PARTIAL",
  FAILED = "FAILED",
}

export interface MetaState {
  savedPaymentMethods: any[];
  customerId: string | null;
  id: string | null;
  status: "IDLE";
  error: boolean | { error: { status: number } };
}
