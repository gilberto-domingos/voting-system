import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/service/layout.service';
import { Observable, Subject, Subscription, startWith, takeUntil } from 'rxjs';
import { VoteEditComponent } from '../vote-edit/vote-edit.component';

@Component({
  selector: 'app-voting',
  template: `
    <p>Nome: {{ nome }}</p>
    <p>Idade: {{ idade }}</p>
  `,
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit , OnDestroy{
  valueSelected: string = '';
  voted: boolean = false;
  newCandidate: string = '';
  participants: string[] = ['Marcelo', 'Andréia', 'Alexandre'];
  title: string = 'Selecione sua escolha :';
  newTitle: string = '';
  titleSearch: string = '';
  receivedData: string = '';
  private unsubscribe = new Subject<void>();  
  @ViewChild(VoteEditComponent, { static: false }) voteEditComponent!: VoteEditComponent;  
  
  valorInicial: number = 0; 
  valorAtual: string = '';
  novoValor: number = 0;

  constructor(private layoutService: LayoutService) {
    this.valorInicial = this.layoutService.getNovoValor();
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMudouValor(evento: { novoValor: number; }){
    this.valorInicial = evento.novoValor;
    this.layoutService.setNovoValor(this.valorInicial);
    console.log(evento.novoValor);
  }    

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.voteEditComponent) {
        this.valorInicial = this.voteEditComponent.valor;        
      } 
    });
  }

  ngOnInit(): void {
    this.layoutService.getData$().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.receivedData = data;
      if (this.voteEditComponent) {
        this.valorInicial = this.voteEditComponent.valor;        
      }
    });

    this.layoutService.getData$().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.receivedData = data;      
    });    
  } 

  ngOnDestroy() {
      this.unsubscribe.next();
      this.unsubscribe.complete();
  }

  sendVote() {
    this.voted = true;
    setTimeout(() => {
      this.voted = false;
    }, 3000);
  }

  selectCandidate(candidate: string) {
    this.valueSelected = candidate;
  }




}

