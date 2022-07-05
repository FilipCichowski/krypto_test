import { ActiveButtonService } from './services/active-button.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataviewComponent } from './dataview/dataview.component';
import { UserInfoComponent } from './sidebar/user-info/user-info.component';
import { DxDataGridModule } from 'devextreme-angular';
import { DxiColumnModule } from 'devextreme-angular/ui/nested';
import { ViewSelectorComponent } from './sidebar/view-selector/view-selector.component';
import { SelectorButtonComponent } from './sidebar/view-selector/selector-button/selector-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyCryptoComponent } from './dataview/my-crypto/my-crypto.component';
import { PopularCryptoComponent } from './dataview/popular-crypto/popular-crypto.component';
import { HttpClientModule } from '@angular/common/http';
import { TableviewComponent } from './dataview/tableview/tableview.component';
import { MaterialModule } from './shared/material.module';
import { AddCryptopDialogComponent } from './dataview/add-cryptop-dialog/add-cryptop-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DataviewComponent,
    UserInfoComponent,
    ViewSelectorComponent,
    SelectorButtonComponent,
    MyCryptoComponent,
    PopularCryptoComponent,
    TableviewComponent,
    AddCryptopDialogComponent,
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxiColumnModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    ActiveButtonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
