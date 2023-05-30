import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {IUser} from "../../models/IUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  personalList!: Observable<IUser[]>;

  ngOnInit(): void {
    this.personalList = this.activatedRoute.data.pipe(map(data => data?.['users']));
  }
}
