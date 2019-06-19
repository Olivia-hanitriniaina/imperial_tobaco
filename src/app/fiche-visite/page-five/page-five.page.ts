import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-five',
  templateUrl: './page-five.page.html',
  styleUrls: ['./page-five.page.scss'],
})
export class PageFivePage implements OnInit {

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

	page_four(){
	    this.router.navigate(['page-four']) ;
	}

	page_six(){
	    this.router.navigate(['page-six']) ;
	}

}
