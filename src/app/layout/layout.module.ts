import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [BaseComponent, NavbarComponent, MenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [BaseComponent],
})
export class LayoutModule {}
