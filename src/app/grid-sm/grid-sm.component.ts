import { Component, Input, OnInit } from '@angular/core';
import { GridTypes } from '../enums/grid-type.enum';

@Component({
  selector: 'app-grid-sm',
  templateUrl: './grid-sm.component.html',
  styleUrls: ['./grid-sm.component.scss']
})
export class GridSmComponent implements OnInit {

  @Input() gridType: GridTypes = GridTypes.Suits;
  @Input() playerId!: string;
  public GridTypes = GridTypes;

  constructor() { }

  ngOnInit(): void {
  }

}
