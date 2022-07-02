import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataviewComponent } from './dataview/dataview.component';
import { GridComponent } from './dataview/grid/grid.component';
import { UserInfoComponent } from './sidebar/user-info/user-info.component';
import { DxDataGridModule } from 'devextreme-angular';
import { ViewSelectorComponent } from './sidebar/view-selector/view-selector.component';
import { SelectorButtonComponent } from './sidebar/view-selector/selector-button/selector-button.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DataviewComponent,
    GridComponent,
    UserInfoComponent,
    ViewSelectorComponent,
    SelectorButtonComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
