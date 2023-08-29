import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VotingService {

  url = 'http://localhost:8081/api';
  constructor(private httpClient: HttpClient) {  }

  getData(endpoint: string): Observable<any[]> {
    console.log(`${this.url}${endpoint}`)
    return this.httpClient.get<any[]>(`${this.url}${endpoint}`);
  }

  postData(endpoint: string, data: any): Observable<any> {
    console.log(`${this.url}${endpoint}`, data)
    return this.httpClient
      .post<any[]>(`${this.url}${endpoint}`, data)
      .pipe(catchError(this.handleError));
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    //console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  };


}
