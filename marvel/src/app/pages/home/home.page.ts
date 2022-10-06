import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { NavEstraServiceService } from '../../services/nav-estra-service.service';
import { Router } from '@angular/router';
import { Globalization } from '@awesome-cordova-plugins/globalization/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  heroes: any = [];
  heroe: any = [];
  constructor(private router: Router, public navCtrl: NavEstraServiceService, public http: HttpClient, public apiService: ApiService) { }






  ngOnInit() {
    this.getHeroes();
   
   
  }

  async getDetails(id: number) {
    await this.apiService.getHero(id)
      .subscribe((res) => {
        let results: any;
        results = res
        this.heroe = results.data.results;
        console.log(this.heroe);
        this.navCtrl.setExtras(this.heroe);
        this.router.navigateByUrl('hero');

      }), ((error) => {
        console.log(error);
      });
  }

  async getHeroes() {

    await this.apiService.getHeroes()
      .subscribe((res) => {
        let results: any;
        results = res
        this.heroes = results.data.results;
        console.log(this.heroes);

      }), ((error) => {
        console.log(error);
      });
  }
}