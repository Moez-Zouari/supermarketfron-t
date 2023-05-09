import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root',
})
export class CommadeService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Commande[]>('http://localhost:8080/Commande');
  }
  create(payload: Commande) {
    return this.http.post<Commande>('http://localhost:8080/Commande', payload);
  }

  getById(id: number) {
    return this.http.get<Commande>(`http://localhost:8080/Commande/${id}`);
  }
  update(payload: Commande) {
    return this.http.put(`http://localhost:8080/Commande`, payload);
  }
  delete(id: number) {
    return this.http.delete<Commande>(`http://localhost:8080/Commande/${id}`);
  }
}
