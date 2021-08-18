import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/core/models/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user: IUser;
  @Output() deleteHandler = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  onDelete() {
    this.deleteHandler.emit(this.user.id);
  }
}
