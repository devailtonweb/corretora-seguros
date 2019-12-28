import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PageHeaderComponent } from './shared/page-header/page-header.component';
import { PageBreadcrumbComponent } from './shared/page-breadcrumb/page-breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageHeaderComponent,
    PageBreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
