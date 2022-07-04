import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/public/views/home/home.component';

const routes: Routes = [
  
  {
    path: "",
    loadChildren: () =>
      import("./features/public/public.module").then((m) => m.PublicModule),
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
