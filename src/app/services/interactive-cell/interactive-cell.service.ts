import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractiveCellService {

  private readonly sbjClearTrigger$: Subject<string> = new Subject<string>();
  public clearTrigger$: Observable<string> = this.sbjClearTrigger$.asObservable();
  
  public readonly characters: string[] = ["", "X", "?", "O"];

  constructor() { }

  public clearCells(id: string): void {
    this.sbjClearTrigger$.next(id);
  }
}
