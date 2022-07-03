import { ActiveButtonService } from './active-button.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataviewComponent } from './dataview/dataview.component';
import { UserInfoComponent } from './sidebar/user-info/user-info.component';
import { DxDataGridModule } from 'devextreme-angular';
import { ViewSelectorComponent } from './sidebar/view-selector/view-selector.component';
import { SelectorButtonComponent } from './sidebar/view-selector/selector-button/selector-button.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { MyCryptoComponent } from './dataview/my-crypto/my-crypto.component';
import { PopularCryptoComponent } from './dataview/popular-crypto/popular-crypto.component';

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
    PopularCryptoComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [
    ActiveButtonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
