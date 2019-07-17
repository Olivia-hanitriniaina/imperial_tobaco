import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-page-six',
  templateUrl: './page-six.page.html',
  styleUrls: ['./page-six.page.scss'],
})
export class PageSixPage implements OnInit {

  	items: { id: number; label: string; } [];
	cols: any[];
	data_from_route : any ;
	dt : any ;

	constructor(private router : Router, private activatedRoute : ActivatedRoute, private storage : Storage) { }

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

	page_seven(){
		let navigation_extra : NavigationExtras = {
			queryParams : {
				data : this.dt
			}
		}
	    this.router.navigate(['page-seven'], navigation_extra) ;
	}

	page_five(){
	    this.router.navigate(['page_five']) ;
	}

	open_menu() {
		this.storage.set("last" , "tournees") ;
		this.router.navigate(['menu']) ;
	}

}
