import { Component, ElementRef, OnInit } from '@angular/core';
import { PlayerService } from '../services/player/player.service';
import { Player } from '../models/player.model';
import { Observable } from 'rxjs';
import { ToggleReadonlyService } from '../services/toggleReadonly/toggle-readonly.service';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent implements OnInit {

  public players$: Observable<Player[]> = this.playerService.players$;

  constructor(
    private readonly toggleService: ToggleReadonlyService,
    private readonly playerService: PlayerService) { }

  ngOnInit(): void {    
  }

  public onAddPlayerClick(): void {
    this.playerService.addDefaultPlayer();
  }

  public onRemovePlayerClick(player: Player): void {
    this.playerService.removePlayer(player);
  }

  public toggleDisable(elem: HTMLInputElement, player: Player): void {
    this.toggleService.toggle(player); 
    this.playerService.updatePlayer({...player, name: elem.value});
  }
}
