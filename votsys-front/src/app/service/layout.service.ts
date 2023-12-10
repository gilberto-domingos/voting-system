import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  
  private dataSubject: ReplaySubject<string> = new ReplaySubject<string>(1);

  setData(data: string): void {
    this.dataSubject.next(data);
  console.log("Service DADOSAA :", data)
  }

  getData$(): Observable<string> {
    return this.dataSubject.asObservable();
  }

  ///////////////////////////////////////////

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
