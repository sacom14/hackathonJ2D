import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ShearchBoxComponent } from './search-box/search-box.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchHistoryComponent,
    SideBarComponent,
    ShearchBoxComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SearchHistoryComponent,
    SideBarComponent,
    ShearchBoxComponent,
  ]
})
export class SharedModule { }
