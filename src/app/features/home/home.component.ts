import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IKpi } from 'src/app/core/models/users';
import { UsersService } from 'src/app/core/services/users/users.service';
import { UsersStoreService } from 'src/app/core/store/users.store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  kpis$: Observable<IKpi[]>;
  constructor(private _usersStoreService: UsersStoreService) {}

  ngOnInit(): void {
    this._initKpis();
  }

  private _initKpis() {
    this.kpis$ = this._usersStoreService.kpis$;
    this._usersStoreService.getKpis();
  }
}
