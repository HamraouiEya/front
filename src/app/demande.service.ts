import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  
  baseUrl = 'http://localhost:8080/php-mysql-crud-api';

  constructor(private http: HttpClient) { }

  getDem(id_dem: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/single_demande.php`,
    { params: { id_dem: id_dem } });
  }

  ajouterDemande(demande: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/ajoutDemande.php`, demande);
  }

  getDemandesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list_dem.php`);
  }
}
