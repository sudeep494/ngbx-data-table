import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbxDataTableComponent } from './ngbx-data-table.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
	declarations: [NgbxDataTableComponent],
	imports: [
		CommonModule,
		NgbPaginationModule
	],
	exports: [NgbxDataTableComponent]
})
export class NgbxDataTableModule { }
