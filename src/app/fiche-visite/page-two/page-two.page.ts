import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.page.html',
  styleUrls: ['./page-two.page.scss'],
})

export class PageTwoPage implements OnInit {
  items: { id: number; label: string; } [];
  cols: any[];

  constructor(private router : Router) { }

  ngOnInit() {
	this.items = [
      {id : 1 , label:'NOUVEAU'},
      {id : 2 , label:'OUVERTE'},
      {id : 3 , label:'CLÔTURÉE'},
    ];

    // this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.cols = [
        { field: 'vin', header: 'Vin' },
        {field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
    ];
  }

  page_one(){
    this.router.navigate(['page-one']) ;
  }

  page_three(){
    this.router.navigate(['page-three']) ;
  }

}
