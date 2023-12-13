import { isApp, isWeb } from './channelHelpers'
import { Channel } from '../types/reducers'

test('checking that the channel is APP', () => {
  expect(isApp(Channel.APP)).toBeTruthy()
  expect(isApp(Channel.WEB)).toBeFalsy()
})

test('checking that the channel is WEB', () => {
  expect(isWeb(Channel.WEB)).toBeTruthy()
  expect(isWeb(Channel.APP)).toBeFalsy()
})
