import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other',
  templateUrl: 'admin-dash.component.html',
  styleUrls: ['admin-dash.component.css']
})

export class AdminDashComponent implements OnInit {
  name: any;
  state: string = '';

  constructor(public af: AngularFire,private router: Router) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/');
  }


  ngOnInit() {
  }

}

