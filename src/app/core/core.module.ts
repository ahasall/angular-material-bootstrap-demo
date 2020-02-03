import { NgModule } from '@angular/core';
import { NavigationListComponent } from './components/navigation-list/navigation-list.component';
import { NavigationDrawerComponent } from './components/navigation-drawer/navigation-drawer.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  exports: [NavigationListComponent, NavigationDrawerComponent, HeaderComponent, FooterComponent],
  declarations: [NavigationListComponent, NavigationDrawerComponent, HeaderComponent, FooterComponent],
  imports: [SharedModule, BrowserAnimationsModule]
})
export class CoreModule {}
