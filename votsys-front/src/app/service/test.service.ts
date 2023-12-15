import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private testSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  test$ = this.testSubject.asObservable();

  getTestValue(){
    return this.testSubject.getValue();
  }

  setTestValue(testEdit: string): void {
    this.testSubject.next(testEdit);
    console.log("SERVICE VARIVEL ", testEdit)
  } 
  
}
