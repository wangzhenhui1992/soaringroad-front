import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

abstract class RequestMethod {
  abstract doRequest<T>(url, parameter): Observable<T>;
  protected buildHeaders(): HttpHeaders {
    const jwt = localStorage.getItem('srjwt');
    console.log(jwt);
    if (jwt) {
      return new HttpHeaders({
        'Content-Type' : 'application/json',
        'Content-Encoding' : 'utf-8',
        'Authorization' : jwt
      });
    } else {
      return new HttpHeaders({
        'Content-Type' : 'application/json',
        'Content-Encoding' : 'utf-8'
      });
    }
  }
}

class GetMethod extends RequestMethod {
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    super();
    this.httpClient = httpClient;
  }
  doRequest<T>(url, parameters): Observable<T> {
    const headers = this.buildHeaders();
    console.log(headers.keys());
    return this.httpClient.get<T>(url, { params: parameters, headers: headers});
  }
}

class PostMethod extends RequestMethod {
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    super();
    this.httpClient = httpClient;
  }
  doRequest<T>(url, body): Observable<T> {
    return this.httpClient.post<T>(url, body, { headers: this.buildHeaders()  });
  }
}

class PutMethod extends RequestMethod {
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    super();
    this.httpClient = httpClient;
  }
  doRequest<T>(url, body): Observable<T> {
    return this.httpClient.put<T>(url, body, { headers: this.buildHeaders()  });
  }
}

@Injectable()
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  private methods = {
    'get': new GetMethod(this.httpClient),
    'post': new PostMethod(this.httpClient),
    'put': new PutMethod(this.httpClient),
    'delete': new GetMethod(this.httpClient)
  };

  public doRequestMain<T>(url: string, parameter: {}, method: 'get' | 'post' | 'delete' | 'put'): Observable<T> {
    return this.doRequest<T>(url, parameter, this.methods[method]);
  }

  private doRequest<T>(url: string, parameter: {}, strategy: RequestMethod): Observable<T> {
    if (!this.checkApi()) {
      return undefined;
    }
    return strategy.doRequest<T>(url, parameter);
  }

  private checkApi() {
    return true;
  }
}



