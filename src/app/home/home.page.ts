import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule],
})
export class HomePage {

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/login']);
  }
 
}


