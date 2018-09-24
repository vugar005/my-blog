import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: '', component: ContactComponent, pathMatch: 'full'}
];

export const ContactRoutes = RouterModule.forChild(routes);
