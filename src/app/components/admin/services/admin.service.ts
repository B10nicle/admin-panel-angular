import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models/IUser";
import {filter, map, merge, Observable} from "rxjs";
import {ResolveEnd, ResolveStart, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  hideLoader!: Observable<boolean>;
  showLoader!: Observable<boolean>;
  isLoading!: Observable<boolean>;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getPersonalList() {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users?_start=0&_limit=5');
  }

  getPerson(id: number) {
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getLoader() {
    this.hideLoader = this.router.events.pipe(filter(e => e instanceof ResolveEnd), map(() => false));
    this.showLoader = this.router.events.pipe(filter(e => e instanceof ResolveStart), map(() => true));
    this.isLoading = merge(this.hideLoader, this.showLoader);
  }
}
