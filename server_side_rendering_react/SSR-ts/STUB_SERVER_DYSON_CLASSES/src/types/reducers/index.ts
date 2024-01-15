import { RouteComponentProps } from "react-router-dom";
import { RouterState } from "connected-react-router";
import { Action } from "history";
import type { WalletState } from "./wallet";
import type { MetaState } from "./meta";

// Export enums & type guards
export { StockHoldStatus } from "./meta";
export { DatacashMigrationAlertType } from "./wallet";
export interface RouterProps extends RouteComponentProps {
  location: {
    query: Record<string, string>;
    pathname: string;
    search: string;
    hash: string;
    state: RouterState;
  };
  action: Action;
}

type RootState = {
  meta: MetaState;
};

export type { RootState, MetaState, WalletState };
