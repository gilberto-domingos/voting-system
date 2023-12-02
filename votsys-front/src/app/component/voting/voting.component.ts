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

  send() {
    console.log('Voto salvo:', this.valueSelected);
    this.voted = true; 
    setTimeout(() => {
      this.voted = false; 
    }, 3000);
  }


  addCandidate() {
    if (this.newCandidate.trim() !== '') {      
      this.newCandidate = ''; 
    }
  }

}

