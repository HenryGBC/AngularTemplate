import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from 'src/app/core/models/profile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() profile: IProfile;
  constructor() {}

  ngOnInit(): void {}
}
