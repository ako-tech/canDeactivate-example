export interface User {
  id: number;
  name: string;
  email: string;
}
export type Users = User[];

export const users: Users = [
  { id: 1, name: 'Manuel', email: 'manuel@fake.es' },
  { id: 2, name: 'Paula', email: 'paula@fake.es' },
  { id: 3, name: 'Andrés', email: 'andres@fake.es' },
  { id: 4, name: 'Ramón', email: 'ramon@fake.es' },
];
