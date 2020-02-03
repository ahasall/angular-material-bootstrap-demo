import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule],
  exports: [CommonModule, RouterModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule]
})
export class SharedModule {}
