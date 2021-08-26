import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserState, IKpi, IUser } from '../models/users';
import { UsersService } from '../services/users/users.service';
import { StateService } from './state.service';

const initialState: UserState = {
  kpis: [],
  users: [],
};

@Injectable({
  providedIn: 'root',
})
export class UsersStoreService extends StateService<UserState> {
  kpis$: Observable<IKpi[]> = this.select((state) => state.kpis);
  users$: Observable<IUser[]> = this.select((state) => state.users);

  // Expose the observable$ part of the _todos subject (read only stream)
  constructor(private _usersService: UsersService) {
    super(initialState);
  }

  getKpis() {
    this._usersService.getKpis().subscribe((kpis) => {
      this.addKpis(kpis);
    });
  }
  getUsers() {
    this._usersService.getUsers().subscribe((users) => {
      this.addUsers(users);
    });
  }

  addKpis(kpis: IKpi[]) {
    this.setState({ kpis });
  }

  addKpi(kpi: IKpi) {
    this.setState({ kpis: [...this.state.kpis, kpi] });
  }
  addUsers(users: IUser[]) {
    this.setState({ users });
  }

  deleteUser(id: number) {
    let users = [...this.state.users];
    const userIndex = users.findIndex((item) => item.id == id);
    users.splice(userIndex, 1);
    this.setState({ users });
  }
  addUser(user: IUser) {
    this.setState({ users: [...this.state.users, user] });
  }
}
