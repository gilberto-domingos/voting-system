import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotingComponent } from './component/voting/voting.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { VoteEditComponent } from './component/vote-edit/vote-edit.component';
import { SumChboxComponent } from './component/sum-chbox/sum-chbox.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'voting' },

  { path: 'voting', component: VotingComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'vote-edit', component: VoteEditComponent } ,
  { path: 'sum-chbox', component: SumChboxComponent }      

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
