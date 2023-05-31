import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {IUser} from "../../models/IUser";
import {ActivatedRoute} from "@angular/router";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  personalList$!: Observable<IUser[]>;
  shown: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
              private adminService: AdminService) {
  }

  hideComponent() {
    return this.shown = false;
  }

  ngOnInit(): void {
    this.personalList$ = this.activatedRoute.data.pipe(map(data => data?.['users']));
    this.adminService.getLoader();
  }
}
