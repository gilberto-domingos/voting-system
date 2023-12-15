import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutCandidateService {

  private testSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  test$ = this.testSubject.asObservable();

  getTestValue(){
    return this.testSubject.getValue();
  }

  setTestValue(testEdit: string): void {
    this.testSubject.next(testEdit);
    console.log("SERVICE VARIVEL ", testEdit)
  } 

  /*
  private novoValorSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  novoValor$ = this.novoValorSubject.asObservable();

  getNovoValor(): number {
    return this.novoValorSubject.getValue();
  }

  setNovoValor(valor: number): void {
    this.novoValorSubject.next(valor);
    console.log("SERVICE VARIVEL ", valor)
  } 

  ////-------------------------- */

  /*
  private removedParticipantSubject: Subject<string> = new Subject<string>();

  participantRemoved$: Observable<string> = this.removedParticipantSubject.asObservable();

  updateRemovedParticipant(candidate: string): void {
    this.removedParticipantSubject.next(candidate);
    console.log("SERVICE PARTICIPANTE REMOVIDO :", candidate)
  }
*/

 
}
