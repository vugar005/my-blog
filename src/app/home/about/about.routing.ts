import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: AboutComponent, pathMatch: 'full' }
];

export const AboutRoutes = RouterModule.forChild(routes);
