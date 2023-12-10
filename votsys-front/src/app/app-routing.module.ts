import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotingComponent } from './component/voting/voting.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { VoteEditComponent } from './component/vote-edit/vote-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'voting' },

  { path: 'voting', component: VotingComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'vote-edit', component: VoteEditComponent }      

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
