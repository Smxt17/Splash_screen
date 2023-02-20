import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public router :Router,

    private platform :Platform
  ) {
    this.initializedApp();
  }
  initializedApp(){
    this.platform.ready().then(()=>{

      this.router.navigateByUrl('splash');
    })
  }
}
