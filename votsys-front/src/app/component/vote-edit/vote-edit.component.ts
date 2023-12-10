import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/service/layout.service';

@Component({
  selector: 'app-vote-edit',
  templateUrl: './vote-edit.component.html',
  styleUrls: ['./vote-edit.component.scss']
})
export class VoteEditComponent implements OnInit{
  valueSelected: string = '';
  newCandidate: string = '';
  participants: string[] = ['Marcelo', 'Andréia', 'Alexandre'];
  title: string = 'Selecione sua escolha :';
  newTitle: string = '';
 text: string = '';
 public data: { name: string, age: number, text: string } = { name: "", age: 0, text: "" };

  @Input() valor: number = 0;  

  @Input() novoValor: number = 0;

  valorInicial: number = 0;

  @Output() mudouValor = new EventEmitter<{ novoValor: number }>();  

  @Output() novoValorChange = new EventEmitter<number>();

  @ViewChild('campoInput', { static: true }) campoValorInput!: ElementRef; 

  @Output() participantRemoved = new EventEmitter<string>();

  constructor(private layoutService: LayoutService){}

  incrementa(): void {
    this.valorInicial++;
    this.campoValorInput.nativeElement.value = this.valorInicial;
    this.mudouValor.emit({ novoValor: this.valorInicial });
    this.layoutService.setNovoValor(this.valorInicial);   
  }

  decrementa(): void {
    this.valorInicial--;
    this.campoValorInput.nativeElement.value = this.valorInicial;
    this.mudouValor.emit({ novoValor: this.valorInicial });
    this.layoutService.setNovoValor(this.valorInicial);      
  }

  
  ngOnInit(): void {    
    this.valorInicial = this.layoutService.getNovoValor();
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
      console.log("PARTICIPANTE REMOVIDO :" , candidate); 
      this.participantRemoved.emit(candidate);   
    }
  }

}  
    
 


