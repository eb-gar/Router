import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
})
export class DashboardPage {
  constructor(private navCtrl: NavController) {}

  login() {
    this.navCtrl.navigateBack('/login');
  }

  home() {
    this.navCtrl.navigateRoot('/home');
  }
}
