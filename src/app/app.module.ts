import { ActiveButtonService } from './services/active-button.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule } from 'devextreme-angular';
import { DxiColumnModule } from 'devextreme-angular/ui/nested';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataviewComponent } from './dataview/dataview.component';
import { UserInfoComponent } from './sidebar/user-info/user-info.component';
import { ViewSelectorComponent } from './sidebar/view-selector/view-selector.component';
import { SelectorButtonComponent } from './sidebar/view-selector/selector-button/selector-button.component';
import { MyCryptoComponent } from './dataview/my-crypto/my-crypto.component';
import { PopularCryptoComponent } from './dataview/popular-crypto/popular-crypto.component';
import { TableviewComponent } from './dataview/tableview/tableview.component';
import { AddCryptopDialogComponent } from './dataview/add-cryptop-dialog/add-cryptop-dialog.component';
import { DeleteCryptoDialogComponent } from './dataview/delete-crypto-dialog/delete-crypto-dialog.component';

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
    DeleteCryptoDialogComponent,
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxiColumnModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [ActiveButtonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
