import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfile } from 'src/app/core/models/profile';
import { IKpi } from 'src/app/core/models/users';
import { UsersService } from 'src/app/core/services/users/users.service';
import { ProfileStoreService } from 'src/app/core/store/profile.store.service';
import { UsersStoreService } from 'src/app/core/store/users.store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  kpis$: Observable<IKpi[]>;
  profile$: Observable<IProfile>;
  constructor(
    private _usersStoreService: UsersStoreService,
    private _profileStoreService: ProfileStoreService
  ) {}

  ngOnInit(): void {
    this._init();
  }

  private _init() {
    this.profile$ = this._profileStoreService.profile$;
    this.kpis$ = this._usersStoreService.kpis$;
    this._usersStoreService.getKpis();
  }
}
