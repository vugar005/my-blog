import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [
  { path: '', component: BlogsComponent, pathMatch: 'full' }
];

export const BlogsRoutes = RouterModule.forChild(routes);
