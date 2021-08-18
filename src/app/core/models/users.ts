export interface IKpi {
  name: string;
  value: number;
}

export interface IUser {
  id: number;
  fullName: string;
  role: string;
}

export interface UserState {
  users: IUser[];
  kpis: IKpi[];
}
