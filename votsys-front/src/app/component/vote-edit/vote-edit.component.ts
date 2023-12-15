import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/service/layout.service';
import { LayoutCandidateService } from 'src/app/service/layout-candidate.service';
import { TestService } from 'src/app/service/test.service';

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

  @Input() valor: number = 0;  

  @Input() novoValor: number = 0;

  valorInicial: number = 0;

  @Output() mudouValor = new EventEmitter<{ novoValor: number }>();  

  @Output() novoValorChange = new EventEmitter<number>();

  @ViewChild('campoInput', { static: true }) campoValorInput!: ElementRef; 

  @Output() participantRemoved = new EventEmitter<string>();

  @Output() testEdit: string = "TESTANDO VARIAVEL testEdit";

  

  constructor(private layoutService: LayoutService,
              private layoutCandidate: LayoutCandidateService,
              private testService: TestService
    ){}


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
      this.participantRemoved.emit(candidate);
    }
  }

  updateTestEditValue(newValue: string) {
    this.testEdit = newValue;
    this.testService.setTestValue(this.testEdit);
    console.log("vote-edit COMPONENT", this.testEdit)
  }

}  
    
 


