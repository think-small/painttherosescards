import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-lg',
  templateUrl: './grid-lg.component.html',
  styleUrls: ['./grid-lg.component.scss']
})
export class GridLgComponent implements OnInit {

  @Input() playerId!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
