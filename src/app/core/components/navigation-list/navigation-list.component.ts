import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss']
})
export class NavigationListComponent {
  @Output() listItemClick = new EventEmitter();

  links = [
    {
      href: '/',
      icon: 'home',
      text: 'Home'
    },
    {
      href: '/about',
      icon: 'info',
      text: 'About  '
    }
  ];
}
