export interface Session { sid: string; userId: string }

export const sessions: Map<string, Session> = new Map([
  ['SID_EXAMPLE_PREMIUM', { sid: 'SID_EXAMPLE_PREMIUM', userId: '1' }],
  ['SID_EXAMPLE_BASIC', { sid: 'SID_EXAMPLE_BASIC', userId: '2' }],
]);