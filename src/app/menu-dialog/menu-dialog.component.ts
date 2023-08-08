import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player/player.service';
import { Player } from '../models/player.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent implements OnInit {

  public players$: Observable<Player[]> = this.playerService.players$;

  constructor(private readonly playerService: PlayerService) { }

  ngOnInit(): void {    
  }

  public onAddPlayerClick() {
    this.playerService.addDefaultPlayer();
  }

  public onRemovePlayerClick(player: Player) {
    this.playerService.removePlayer(player);
  }
}
