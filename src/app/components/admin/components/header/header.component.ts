import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService,
              private adminService: AdminService) {
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.adminService.getLoader();
  }
}
