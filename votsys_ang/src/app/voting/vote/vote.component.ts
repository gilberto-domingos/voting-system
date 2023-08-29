import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Participant } from 'src/app/model/participant';
import { VotingService } from 'src/app/voting/services/voting.service';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent {

  form: FormGroup;


  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    }
  }


  participants : Participant[] | undefined;

  constructor(private fb: FormBuilder, private service : VotingService) {
    this.form = this.fb.group({
      cod1: false,
      cod2: false,
      cod3: false,
    });

  }

  ngOnInit(): void {
    this.getParticipants();
  }

  getParticipants() {
    this.service.getData('/participants/all').subscribe((participants) => {
      this.participants = participants;
    }) ;
  }




  }




