import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navbarText = [
    {
      content: 'About Me'
    },
    {
      content: 'Games Played'
    },
    {
      content: 'Socials'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
