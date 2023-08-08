import { Component, OnInit } from '@angular/core';
import { GridTypes } from '../enums/grid-type.enum';
import { MatDialog } from '@angular/material/dialog';
import { MenuDialogComponent } from '../menu-dialog/menu-dialog.component';
import { PlayerService } from '../services/player/player.service';
import { Player } from '../models/player.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  public players$: Observable<Player[]> = this.playerService.players$;    
  
  constructor(    
    private readonly playerService: PlayerService,
    private readonly dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  public onMenuClicked(): void {
    this.dialog.open(MenuDialogComponent);
  }
}
