import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {  

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
