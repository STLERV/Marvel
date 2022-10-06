import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
import { NavEstraServiceService } from '../../services/nav-estra-service.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.page.html',
  styleUrls: ['./hero.page.scss'],
})
export class HeroPage implements OnInit {
  extras: any;
  hero: any;
  constructor(private navCont: NavEstraServiceService, private route: ActivatedRoute, public navCtrl: NavController, public http: HttpClient, public apiService: ApiService) {

  }


  ngOnInit() {

    this.extras = this.navCont.getExtras();
    this.hero = this.extras[0];
  }




}
