import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { VoteComponent } from './vote/vote.component';
import { VotingRoutingModule } from './voting-routing.module';


@NgModule({
  declarations: [
    VoteComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    VotingRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    JsonPipe,
    MatCheckboxModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule

  ]
})
export class VotingModule { }
