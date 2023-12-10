import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/service/layout.service';
import { Observable, Subject, Subscription, startWith, takeUntil } from 'rxjs';
import { VoteEditComponent } from '../vote-edit/vote-edit.component';
import { ChangeDetectorRef } from '@angular/core';

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

  constructor(private layoutService: LayoutService,private cdr: ChangeDetectorRef) {
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
  

  ngOnInit(): void {
    this.layoutService.getData$().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.receivedData = data;      
    });

    this.layoutService.getData$().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.receivedData = data;      
    });    
  }
  
  ngAfterViewInit(): void {
    this.voteEditComponent.valorAtualizado.subscribe((novoValor: number) => {
      this.valorInicial = novoValor;      
    });   
  }

  ngOnDestroy() {
      this.unsubscribe.next();
      this.unsubscribe.complete();
  }



  ///////////////////////////////////////

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

