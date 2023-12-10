import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  
  private dataSubject: ReplaySubject<string> = new ReplaySubject<string>(1);

  private removedParticipantSubject: Subject<string> = new Subject<string>();

  participantRemoved$: Observable<string> = this.removedParticipantSubject.asObservable();

  updateRemovedParticipant(candidate: string): void {
    this.removedParticipantSubject.next(candidate);
    console.log("SERVICE PARTICIPANTE REMOVIDO :", candidate)
  }

  setData(data: string): void {
    this.dataSubject.next(data);  
  }

  getData$(): Observable<string> {
    return this.dataSubject.asObservable();
  }  

  private novoValorSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  novoValor$ = this.novoValorSubject.asObservable();

  getNovoValor(): number {
    return this.novoValorSubject.getValue();
  }

  setNovoValor(valor: number): void {
    this.novoValorSubject.next(valor);
    console.log("SERVICE VARIVEL ", valor)
  }

}
