import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { InteractiveCellService } from '../services/interactive-cell/interactive-cell.service';
import { FormControl } from '@angular/forms';
import { GridTypes } from '../enums/grid-type.enum';
import { Player } from '../models/player.model';
import { debounceTime } from 'rxjs/operators';
import { PlayerService } from '../services/player/player.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit, OnDestroy {

  public GridTypes = GridTypes;
  public cardDifficulties: string[] = ["Easy", "Medium", "Hard"];
  
  @Input() player!: Player;
  public playerNameInput = new FormControl();
  public cardDifficultyInput = new FormControl();

  private subCardDifficultyInput!: Subscription;
  
  constructor(
    private readonly cellService: InteractiveCellService,
    private readonly playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerNameInput.setValue(this.player.name);

    this.subCardDifficultyInput = this.cardDifficultyInput.valueChanges
      .subscribe((cardDifficulty: string) => {
        const updatedPlayer = {...this.player, cardDifficulty };
        this.playerService.updatePlayer(updatedPlayer);
      })
  }

  ngOnDestroy(): void {
    this.subCardDifficultyInput.unsubscribe();
  }

  public onClearClicked(): void {
    this.cellService.clearCells(this.player.id);
  }
}
