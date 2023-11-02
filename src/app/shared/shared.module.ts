import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ShearchBoxComponent } from './shearch-box/shearch-box.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ShearchBoxComponent,
    SearchHistoryComponent,
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ShearchBoxComponent,
    SearchHistoryComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
