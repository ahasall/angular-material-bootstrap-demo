import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss']
})
export class NavigationDrawerComponent implements OnInit, OnDestroy {
  @ViewChild('sidenavRef', { static: false }) sideNavRef: MatSidenav;
  mode: 'over' | 'push' | 'side' = 'side';
  opened = true;
  private subscription: Subscription;

  constructor(breakpointObserver: BreakpointObserver) {
    this.subscription = breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .pipe(
        map(result => result.matches),
        tap(matches => {
          this.mode = matches ? 'side' : 'over';
          this.opened = matches;
        })
      )
      .subscribe();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggle() {
    this.sideNavRef.toggle();
  }

  close() {
    if (this.mode === 'over') {
      this.sideNavRef.close();
    }
  }
}
