import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";

import { PageBreadcrumbComponent } from './page-breadcrumb/page-breadcrumb.component';
import { PageHeaderComponent } from './page-header/page-header.component';


@NgModule({
  declarations: [
    PageBreadcrumbComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageBreadcrumbComponent,
    PageHeaderComponent,
    RouterModule
  ]
})
export class SharedModule { }
