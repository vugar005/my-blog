import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: [
    {path: '', redirectTo: 'about', pathMatch: 'full'},
    {path: 'about', loadChildren: './home/about/about.module#AboutModule'},
    {path: 'contact', loadChildren: './home/contact/contact.module#ContactModule'},
    {path: 'blogs', loadChildren: './home/blogs/blogs.module#BlogsModule'},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
