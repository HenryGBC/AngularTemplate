import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IKpi, IUser } from '../../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getKpis(): Observable<IKpi[]> {
    return of([
      { value: 230, name: 'Kpi 1' },
      { value: 850, name: 'Kpi 2' },
      { value: 110, name: 'Kpi 3' },
      { value: 10, name: 'Kpi 4' },
      { value: 220, name: 'Kpi 5' },
      { value: 70, name: 'Kpi 6' },
      { value: 30, name: 'Kpi 7' },
    ]);
  }

  getUsers(): Observable<IUser[]> {
    return of([
      { id: 1, fullName: 'User Lastname', role: 'Frontend Developer' },
      { id: 2, fullName: 'User Lastname', role: 'Backend Developer' },
      { id: 3, fullName: 'User Lastname', role: 'Software Engineer' },
      { id: 4, fullName: 'User Lastname', role: 'Frontend Developer' },
      { id: 5, fullName: 'User Lastname', role: 'Backend Developer' },
    ]);
  }
}
