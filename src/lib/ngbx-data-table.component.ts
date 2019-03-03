// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'lib-ngbx-data-table',
//   template: `
//     <p>
//       ngbx-data-table works!
//     </p>
//   `,
//   styles: []
// })
// export class NgbxDataTableComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

import { Component, Input, Output, OnInit, OnChanges, TemplateRef, EventEmitter } from '@angular/core';

@Component({
	selector: 'ngbx-data-table',
	templateUrl: './ngbx-data-table.component.html'
})

export class NgbxDataTableComponent implements OnInit, OnChanges {

	@Input() documents: any[];
	@Input() filters;
	@Input() columns: any[];
	@Input() page:number=1;
	@Input() limit:number=10;
	@Input() sortBy: string;
	@Input() order: string;
	@Input() count: number;
	@Input() id = 'ID';
	@Input() templates;
	@Output() refetch = new EventEmitter<any>();

	constructor () {
	}

	params:params = {
		page : this.page,
		limit: this.limit,
		sortBy: this.sortBy,
		order: this.order
	}

	ngOnChanges(changes) {
		if (changes.documents){
			this.documents = changes.documents.currentValue;
		}
	}

	ngOnInit() {
		this.params = {
			page : this.page,
			limit: this.limit,
			sortBy: this.sortBy,
			order: this.order
		}
	}

	updateSort(column, order?) {
		if (this.params.sortBy === column) {
			this.params.order = order ? order : this.params.order === 'asc' ? 'desc' : 'asc';
		}else {
			this.params.sortBy = column;
			this.params.order = order ? order : 'asc';
		}
		this.refetch.emit({params:this.params});
	}

	onPageChange(event) {
		this.refetch.emit({params:this.params});
	}

}
 interface params{
	page: number,
	limit: number,
	sortBy: string,
	order: string
}
