export interface User { id: string; alias: string; isPremium: boolean }

export const users: Map<string, User> = new Map([
  ['1', { id: '1', alias: 'user_1', isPremium: true }],
  ['2', { id: '2', alias: 'user_2', isPremium: false }],
]);

export const getUser = (id?: string | null) => (id ? users.get(id) : undefined);