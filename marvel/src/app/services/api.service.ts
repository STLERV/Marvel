import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { Observable } from 'rxjs';



const keyAPI = {
  private: '449e6568143aba6c61aba716ff479b05448d4129',
  public: '2dd074ef23678518d46341146294bf0e'
}

@Injectable({
  providedIn: 'root'

})



export class ApiService {
  private base = 'https://gateway.marvel.com:443/'

  constructor(public http: HttpClient) { }



  getHeroes() {

    let ts = 100;
    let hash = Md5.hashStr(ts + keyAPI.private + keyAPI.public);
    return this.http.get(this.base + `v1/public/characters?ts=${ts}&apikey=${keyAPI.public}&hash=${hash}`);

  }

  getHero(id: number) {
    let ts = 100;
    let hash = Md5.hashStr(ts + keyAPI.private + keyAPI.public);
    return this.http.get(this.base + `v1/public/characters/${id}?ts=${ts}&apikey=${keyAPI.public}&hash=${hash}`);

  }

}
