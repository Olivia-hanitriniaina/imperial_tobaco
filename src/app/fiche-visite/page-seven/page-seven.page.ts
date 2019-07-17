import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-page-seven',
  templateUrl: './page-seven.page.html',
  styleUrls: ['./page-seven.page.scss'],
})
export class PageSevenPage implements OnInit {

 	items: { id: number; label: string; } [];
	cols: any[];
	data_from_route : any ;
	dt : any ;

	constructor(private storage : Storage, private router : Router, private activatedRoute : ActivatedRoute) { }

	ngOnInit() {

		this.activatedRoute.queryParams.subscribe(data => {
			this.dt = data['data'] ;
			this.data_from_route = JSON.parse(data['data']) ;
		}) ;

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

	page_six(){
	    this.router.navigate(['page-six']) ;
	}

	open_menu() {
		this.storage.set("last" , "tournees") ;
		this.router.navigate(['menu']) ;
	}

}
