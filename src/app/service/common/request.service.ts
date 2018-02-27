import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface RequestMethod {
  doRequest<T>(url , parameter): Observable<T>;
}


class GetMethod implements RequestMethod {
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  doRequest<T>(url , parameters): Observable<T> {
    return this.httpClient.get<T>(url , { params : parameters });
  }
}

@Injectable()
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  private methods = {
    'get' : new GetMethod(this.httpClient)
  };

  public doRequestMain<T>(url: string, parameter: {}, method: 'get' | 'post' | 'delete' | 'put'): Observable<T> {
    return this.doRequest<T>(url, parameter, this.methods[method]);
  }

  private doRequest<T>(url: string, parameter: {} , strategy: RequestMethod ): Observable<T> {
    if (!this.checkApi()) {
      return undefined;
    }
    return strategy.doRequest<T>(url, parameter);
  }

  private checkApi() {
    return true;
  }
}



