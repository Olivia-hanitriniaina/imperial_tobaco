import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-six',
  templateUrl: './page-six.page.html',
  styleUrls: ['./page-six.page.scss'],
})
export class PageSixPage implements OnInit {

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

	page_seven(){
	    this.router.navigate(['page-seven']) ;
	}

	page_six(){
	    this.router.navigate(['page-six']) ;
	}

}
