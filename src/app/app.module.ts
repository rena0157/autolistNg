import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AutolistTextareaComponent } from './autolist-textarea/autolist-textarea.component';
import { OutputCellComponent } from './output-cell/output-cell.component';
import { ObjectTableComponent } from './object-table/object-table.component';
import { AutolistService } from './autolist.service';
import { DownloadButtonComponent } from './download-button/download-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AutolistTextareaComponent,
    OutputCellComponent,
    ObjectTableComponent,
    DownloadButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
