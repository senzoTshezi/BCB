import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curreny',
  templateUrl: './curreny.component.html',
  styleUrls: ['./curreny.component.css']
})
export class CurrenyComponent implements OnInit {
currency:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp= this.http.get('http://localhost:3000/cryptocurrency/');
    resp.subscribe((data) => this.currency = data);
  //  let senzo =  Object.entries(this.currency );
  //  console.log('********', senzo);
     resp.subscribe((data) => console.log(data));
  }

}
