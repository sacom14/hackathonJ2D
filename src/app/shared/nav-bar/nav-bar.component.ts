import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private router: Router){}

  public goToCharacters(): void {
    this.router.navigate(['/characters']);
  }
  public goToEpisodes(): void {
    this.router.navigate(['/episodes']);
  }
  public goToLocations(): void {
    this.router.navigate(['/locations']);
  }
}
