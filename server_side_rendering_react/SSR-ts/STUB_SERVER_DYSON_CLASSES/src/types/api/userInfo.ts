/**
 * types for /webapp/wcs/stores/servlet/GetUserInfo
 */

export interface GetUserInfoAPIPayload {
  userId: string
  userState: WCSUserState
  emailAddress: string
  trolleyCount: number
  firstName: string
  postCode: string | null
}

export enum WCSUserState {
  GUEST = 'GUEST',
  LOGGEDIN = 'LOGGEDIN',
  RECOGNISED = 'RECOGNISED',
}
