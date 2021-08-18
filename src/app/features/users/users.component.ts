import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/models/users';
import { UsersService } from 'src/app/core/services/users/users.service';
import { UsersStoreService } from 'src/app/core/store/users.store.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$: Observable<IUser[]>;
  constructor(private _usersStoreService: UsersStoreService) {}

  ngOnInit(): void {
    this._initUsers();
  }

  deleteHandler(id: number) {
    console.log(id);
    this._usersStoreService.deleteUser(id);
  }

  private _initUsers() {
    this.users$ = this._usersStoreService.users$;
    this._usersStoreService.getUsers();
  }
}
