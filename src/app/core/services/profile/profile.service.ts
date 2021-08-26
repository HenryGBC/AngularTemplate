import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProfile } from '../../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  getProfile(): Observable<IProfile> {
    return of({
      fullName: 'Henry Bravo',
      email: 'email@email.com',
      username: '@HenryGBCDev',
    });
  }
}
