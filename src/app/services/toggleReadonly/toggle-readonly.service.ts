import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Player } from 'src/app/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class ToggleReadonlyService {

  private sbjToggleTrigger: Subject<string> = new Subject<string>();
  public toggleTrigger: Observable<string> = this.sbjToggleTrigger.asObservable();

  constructor() { }

  public toggle(player: Player): void {
    this.sbjToggleTrigger.next(player.id);
  }
}
