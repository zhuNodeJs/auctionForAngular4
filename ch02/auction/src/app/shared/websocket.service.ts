import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class WebsocketService {

  ws:WebSocket;

  constructor() { }

  createObservableSocket(url: string, id: number): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable<string>(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (error) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
        this.ws.onopen = (event) => this.sendMessage({productId: id});
        return () => this.ws.close();// 取消订阅的时候调用，关闭连接。
      }
    ).map(message => JSON.parse(message));
  }

  sendMessage(message: any) {
    this.ws.send(JSON.stringify(message));
  }
}
