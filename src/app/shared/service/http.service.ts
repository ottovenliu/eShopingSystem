// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable, inject } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class HttpService {
//   private http = inject(HttpClient);
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   get<T>(
//     path: string,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     params?: any
//   ): Observable<T> {
//     const headers = new HttpHeaders({ Authorization: 'Bearer ' + localStorage.getItem(TOKEN_KEY) });
//     return this.http.get<T>(path, {
//       params: params,
//       headers: headers,
//     });
//   }

//   post<T>(
//     path: string,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     params: any = null,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     body: any,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     responseType?: any
//   ): Observable<T> {
//     const headers = new HttpHeaders({
//       Authorization: 'Bearer ' + localStorage.getItem(TOKEN_KEY),
//       'Content-Type': 'application/json',
//     });
//     return this.http.post<T>(path, body, {
//       params: params,
//       headers: headers,
//       responseType: responseType,
//     });
//   }
// }
