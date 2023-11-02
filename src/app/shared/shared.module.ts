import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ShearchBoxComponent } from './shearch-box/shearch-box.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ShearchBoxComponent,
    SearchHistoryComponent,
    SideBarComponent
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
