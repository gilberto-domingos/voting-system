import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotingComponent } from './component/voting/voting.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'voting' },

  { path: 'voting', component: VotingComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'footer', component: FooterComponent }    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
