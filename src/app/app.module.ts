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
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MyCryptoComponent } from './dataview/my-crypto/my-crypto.component';
import { PopularCryptoComponent } from './dataview/popular-crypto/popular-crypto.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';


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
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxiColumnModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    ActiveButtonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
