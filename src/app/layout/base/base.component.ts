import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfile } from 'src/app/core/models/profile';
import { ProfileStoreService } from 'src/app/core/store/profile.store.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent implements OnInit {
  profile$: Observable<IProfile>;
  constructor(private _profileStoreService: ProfileStoreService) {}

  ngOnInit(): void {
    this._profileStoreService.getProfile();
    this.profile$ = this._profileStoreService.profile$;
  }
}
