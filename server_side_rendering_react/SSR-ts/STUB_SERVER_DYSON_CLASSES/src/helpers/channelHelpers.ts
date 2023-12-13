import { Channel } from '../types/reducers'

export const isApp = (channel: Channel): boolean => channel === Channel.APP
export const isWeb = (channel: Channel): boolean => channel === Channel.WEB
