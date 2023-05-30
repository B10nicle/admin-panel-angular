import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {IUser} from "../../models/IUser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {

  }

  user!: Observable<IUser>;

  ngOnInit(): void {
    this.user = this.activatedRoute.data.pipe(map(data => data?.['user']));
  }
}
