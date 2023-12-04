import { Component } from '@angular/core';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent {
  valueSelected: string = '';
  voted: boolean = false;
  newCandidate: string = '';
  participants: string[] = ['Marcelo', 'Andréia', 'Alexandre'];
  title: string = 'Selecione sua escolha :';
  newTitle: string = '';

  sendVote() {    
    this.voted = true;
    setTimeout(() => {
      this.voted = false;
    }, 3000);
  }

  addCandidate() {
    if (this.newCandidate.trim() !== '') {
      this.participants.push(this.newCandidate);
      this.newCandidate = '';
    }
  }

  selectCandidate(candidate: string) {
    this.valueSelected = candidate;
  }

  removeParticipant(candidate: string) {
    const index = this.participants.indexOf(candidate);
    if (index !== -1) {
      this.participants.splice(index, 1);
      if (this.valueSelected === candidate) {
        this.valueSelected = '';
      }
    }
  }

  atualizarTitulo() {
    if (this.newTitle.trim() !== '') {
      this.title = this.newTitle;
      this.newTitle = ''; 
    }
  }

}

