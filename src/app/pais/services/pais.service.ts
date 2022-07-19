import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  get httpParams () {
    return new HttpParams().set('fields', 'name,capital,flags,cca2,population')
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url, { params : this.httpParams})
    /// esto se puede usar en vez de cachar el error en el porpais component con el suscribe
    // .pipe(
    //   catchError(err => of([]))
    // )
  }

  
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url, { params : this.httpParams})
}

  infoPais(id: string): Observable<Country[]> {
  const url = `${this.apiUrl}/alpha/${ id }`;
  return this.http.get<Country[]>(url)
}

buscarRegion(termino: string): Observable<Country[]> {
  const url = `${this.apiUrl}/region/${termino}`
  return this.http.get<Country[]>(url, { params : this.httpParams})
}
}
