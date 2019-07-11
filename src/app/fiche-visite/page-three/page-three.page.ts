import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage'

@Component({
	selector: 'app-page-three',
	templateUrl: './page-three.page.html',
	styleUrls: ['./page-three.page.scss'],
})
export class PageThreePage implements OnInit {
	items: { id: number; label: string; } [];
	cols: any[];
	edit : boolean = false ;
	data_from_route : any ;
	dt : any ;

	constructor(private router : Router, private activatedRoute : ActivatedRoute, private storage : Storage) { }

	ngOnInit() {
		this.activatedRoute.queryParams.subscribe(data => {
			this.dt = data['data'] ;
			this.data_from_route = JSON.parse(data['data']) ;
		})
		this.items = [
	      {id : 1 , label:'NOUVEAU'},
	      {id : 2 , label:'OUVERTE'},
	      {id : 3 , label:'CLÔTURÉE'},
	    ];

	    // this.carService.getCarsSmall().then(cars => this.cars = cars);

	    this.cols = [
        { field: 'manufacturer_name', header: 'Fabricant' ,display : 'table-cell', text_align : "left"},
        { field: 'product_name', header: 'Produit' ,display : 'table-cell', text_align : "left"},
        { field: 'last_four_visit_avg', header: 'Prix relevé lors de la dernière visite' ,display : 'table-cell', text_align : "right"},
        { field: 'available_stock', header: 'Relevé prix' ,display : 'table-cell', text_align : "right"},
    ];
	}

	page_two(){
	    this.router.navigate(['page-two']) ;
	  }

	  page_four(){
			let navigation_extra : NavigationExtras = {
				queryParams : {
					data : this.dt
				}
			}
	    this.router.navigate(['page-four'], navigation_extra) ;
		}
		
		enable_edit(){
			if(this.edit == false) {
				this.edit = true ;
			}
			else {
				this.edit = false
			}
		}

		open_menu() {
			this.storage.set("last" , "tournees") ;
			this.router.navigate(['menu']) ;
		}
		

}
