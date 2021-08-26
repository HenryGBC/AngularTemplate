import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IProfile, ProfileState } from '../models/profile';
import { UserState, IKpi, IUser } from '../models/users';
import { ProfileService } from '../services/profile/profile.service';
import { UsersService } from '../services/users/users.service';
import { StateService } from './state.service';

const initialState: ProfileState = {
  profile: undefined,
};

@Injectable({
  providedIn: 'root',
})
export class UsersStoreService extends StateService<ProfileState> {
  profile$: Observable<IProfile> = this.select((state) => state.profile);

  // Expose the observable$ part of the _todos subject (read only stream)
  constructor(private _profileService: ProfileService) {
    super(initialState);
  }

  getProfile() {
    this._profileService.getProfile().subscribe((profile) => {
      this.setProfile(profile);
    });
  }

  setProfile(profile: IProfile) {
    this.setState({ profile });
  }
}
