import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private onScroll = new BehaviorSubject<number>(0);

  constructor() { }

  onScroll$(): Observable<any> {
    return this.onScroll.asObservable();
  }

  public setScroll(value) {
    this.onScroll.next(value);
  }
}
