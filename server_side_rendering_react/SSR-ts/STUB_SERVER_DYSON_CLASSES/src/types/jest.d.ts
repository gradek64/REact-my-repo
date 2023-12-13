declare namespace jest {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Matchers<R> {
    toContainAction(action: { type: string }, receivedPayload?: unknown): { pass: boolean; message: string }
  }
}
