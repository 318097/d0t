import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/authentication/authentication.service';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  showMenu = false;
  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
    this.authenticationService.logout();
  }
}
