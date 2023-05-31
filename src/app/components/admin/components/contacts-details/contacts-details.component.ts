import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {IUser} from "../../models/IUser";
import {ActivatedRoute} from "@angular/router";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit {
  user$!: Observable<IUser>;
  shown: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
              private adminService: AdminService) {
  }

  hideComponent() {
    return this.shown = false;
  }

  ngOnInit(): void {
    this.user$ = this.activatedRoute.data.pipe(map(data => data?.['user']));
    this.adminService.getLoader();
  }
}
