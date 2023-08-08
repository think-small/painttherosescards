import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from 'src/app/models/player.model';
import { v4 as uuid } from 'uuid';

const initialPlayer = {
  id: uuid(),
  name: "Player 1",
  cardDifficulty: ""
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private sbjPlayers$: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([initialPlayer]);
  public players$: Observable<Player[]> = this.sbjPlayers$.asObservable();

  private playerCount: number = 1;

  constructor() { }

  private createDefaultPlayer(): Player {
    const defaultPlayer = {
      id: uuid(),
      name: `Player ${++this.playerCount}`,
      cardDifficulty: ""
    };
    
    return defaultPlayer;
  }

  public updatePlayer(player: Player) {
    const selectedPlayer = this.sbjPlayers$.value.filter(p => p.id === player.id);
    
    if (selectedPlayer.length === 1) {
      selectedPlayer[0].name = player.name;
      selectedPlayer[0].cardDifficulty = player.cardDifficulty;    
    }    
  }

  public addDefaultPlayer() {
    const newPlayers = [...this.sbjPlayers$.value, this.createDefaultPlayer()];
    this.sbjPlayers$.next(newPlayers);
  }

  public removePlayer(player: Player) {
    const filteredPlayers = this.sbjPlayers$.value.filter(p => p.id !== player.id);

    if (filteredPlayers.length < 1) {
      alert("Minimum of one player is required");
      return;
    }

    this.playerCount = filteredPlayers.length;
    this.sbjPlayers$.next(filteredPlayers);
  }
}
