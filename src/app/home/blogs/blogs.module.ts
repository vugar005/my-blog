import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { BlogsRoutes } from './blogs.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BlogsRoutes,
    SharedModule
  ],
  declarations: [BlogsComponent]
})
export class BlogsModule { }
