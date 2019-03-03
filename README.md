# Get Started with NGBX-DATA-TABLE

## Install the package
Run `npm install ngbx-data-table`

## Import the package
Run `import { NgbxDataTableModule } from 'ngbx-data-table';`
Add Module to the imports `NgbxDataTableModule`

## Use the Package - example
`
<ngbx-data-table
	[documents]="documents"
	[columns]="columns"
	[limit] = "params.limit"
	[sortBy] = "params.sortBy"
	[order] = "params.order"
	count = "33"
	[templates] = "{'MoreInfoTemplate':MoreInfoTemplate,'PriceTemplate':PriceTemplate,'SellerTemplate':SellerTemplate}"
	(refetch)="onRefetch($event)">

</ngbx-data-table>

<ng-template #PriceTemplate let-document="document">
	$ {{document.Price}}
</ng-template>
<ng-template #SellerTemplate let-document="document">
	{{document.SellerCity}}, {{document.SellerState}}
</ng-template>
<ng-template #MoreInfoTemplate let-document="document">
	<a (click)="showMoreInfo(document.ID)" href="/">availability..</a>
</ng-template>
`

## Define the fetch handlers etc
`
url = 'http://5c78b1f83a89af0014cd7109.mockapi.io/test/documents';

documents = [];

params = {
	page : 1,
	limit: 5,
	sortBy: 'FirstName',
	order: 'asc'
}

ngOnInit() {
	this.fetch();
}

fetch() {
	const fetchUrl = this.url+'?page='+this.params.page+'&limit='+this.params.limit+'&sortBy='+this.params.sortBy+'&order='+this.params.order;
	this.http.get(fetchUrl).subscribe(
		response => {
			this.documents = <any[]>(response);
			console.log(this.documents);
		}
	);
}

columns = [
	{'name':'Name', 'label':'Product', 'sortable':true},
	{'name':'Price', 'label':'Price', 'sortable':true, template:'PriceTemplate'},
	{'name':'Color', 'label':'Color', 'sortable':false},
	{'name':'SellerCity', 'label':'Ships From', 'sortable':false, template:'SellerTemplate'},
	{'name':'ID', 'label':'More Info', 'sortable':false, template:'MoreInfoTemplate'}
];

onRefetch(event) {
	this.params = event.params;
	this.fetch();
}

showMoreInfo(id) {
	alert(`This Product is only available until Until ${this.documents.filter(function(document) { return document.ID == id; })[0].AvailableUntil}`);
}
`




# NgbxDataTable

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Code scaffolding

Run `ng generate component component-name --project ngbx-data-table` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngbx-data-table`.
> Note: Don't forget to add `--project ngbx-data-table` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build ngbx-data-table` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngbx-data-table`, go to the dist folder `cd dist/ngbx-data-table` and run `npm publish`.

## Running unit tests

Run `ng test ngbx-data-table` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
