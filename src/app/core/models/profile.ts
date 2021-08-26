export interface IProfile {
  fullName: string;
  email: string;
  username: string;
}
export interface ProfileState {
  profile: IProfile | undefined;
}
