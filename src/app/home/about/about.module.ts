import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutes } from './about.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutes,
    SharedModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
