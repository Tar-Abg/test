import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ComentsComponent } from './components/coments/coments.component'


const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'coments', component: ComentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
