import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/core/settings/app.settings';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private get<T>(path: string, headers?: HttpHeaders, params?: any): Observable<T> {
    return this.http.get<T>(path, {
      params: params,
      headers: headers,
    });
  }

  private post<T>(
    path: string,
    headers: HttpHeaders,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params: any = null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    responseType?: any
  ): Observable<T> {
    return this.http.post<T>(path, body, {
      params: params,
      headers: headers,
      responseType: responseType,
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getFormDummy<T>(path: string, params?: any): Observable<HttpResponse<T>> {
    const headers = new HttpHeaders({ 'app-id': AppSettings.DUMMY_API_KEY });
    return this.get(path, headers, params);
  }
}
