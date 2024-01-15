import React from "react";
import { match } from "react-router";
import { useSelector } from "react-redux";
import { Request } from "express";

import { getMeta } from "../../selectors";
import GetSnapshotRedirects from "../GetSnapshotRedirects/GetSnapshotRedirects";

import UserSecretInfo from "../../pages/UserSecretInfo";
import { INIT_USER_INFO_PAGE } from "../../../actions";

const UserSecretInfoContainer = () => {
  const { savedPaymentMethods } = useSelector(getMeta);
  console.log("getMeta updated by selector !!!", savedPaymentMethods);
  // console.log('------props in UserSecretInfoContainer--------', props);

  /*
      //validation to show children below with redirect and early return

      this should happen on server-site, but the `req` object CAN NOT be directly access in client
      because they are seperate. Therefore data has to be places in redux store and then read in client 
      for example by redux selectors
    

   const { error } = useSelector(getMeta); */

  /*  if (error) {
    if (
      typeof error === "object" &&
      !(error instanceof Error) &&
      error.status === StatusCode.UNAUTHORIZED
    ) {
      return (
        <Redirect
          to={`/login?pageName=mandatoryPrepay&successUrl=${encodeURIComponent(
            `${location.pathname}${location.search}`
          )}`}
        />
      );
    }

    return <Redirect to={errorPath} />;
  } */

  return (
    <GetSnapshotRedirects>
      <UserSecretInfo savedPaymentMethods={savedPaymentMethods} />
    </GetSnapshotRedirects>
  );
};

// --------------------- TS setup for quick reference
export type DecoratedRequest<
  RouteParams = unknown,
  ReqQuery = unknown
> = Request<RouteParams, unknown, unknown, ReqQuery> & {};

interface MatchParams {
  id: string;
}
type GetInitialActionsParams<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  RouteParams extends { [K in keyof RouteParams]?: string | undefined } = any,
  ReqQuery = unknown
> = {
  req: DecoratedRequest<RouteParams, ReqQuery>;
  res: Response;
  match: match<RouteParams>;
};
// --------------------- //

// getInitialActions is called on server-site
// the redux saga is called on server-site from here
UserSecretInfoContainer.getInitialActions = ({
  req,
  match,
}: GetInitialActionsParams<MatchParams>) => {
  const { id } = match.params;
  const cookie = req.get("cookie") || "";

  console.log("---------------COOKIE----------", cookie);

  return INIT_USER_INFO_PAGE({ cookie });
};

export default UserSecretInfoContainer;
