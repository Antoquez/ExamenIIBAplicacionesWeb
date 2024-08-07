import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculoService {
  private baseUrl = 'http://localhost:3000'; // URL del backend

  constructor(private http: HttpClient) { }

  // Realizar operación
  realizarOperacion(operacion: string, num1: number, num2: number): Observable<any> {
    const url = `${this.baseUrl}/${operacion}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'num1': num1.toString(),
      'num2': num2.toString()
    });

    return this.http.get(url, { headers: headers });
  }

  // Obtener todos los cálculos
  obtenerTodosLosCalculos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/calculos`);
  }
}

