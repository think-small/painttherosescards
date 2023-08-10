import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { InteractiveCellService } from '../../services/interactive-cell/interactive-cell.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[interactiveCell]'
})
export class InteractiveCellDirective implements OnInit, OnDestroy {

  @HostListener("click") onClick() {
    if (this.selectedIndex < 3) {
      this.selectedIndex++;      
    }
    else {
      this.selectedIndex = 0;      
    }

    this.elementRef.nativeElement.innerText = 
      this.cellService.characters[this.selectedIndex];
  }

  @Input() playerId!: string;
  public selectedIndex: number = 0;
  private clearTrigger$!: Subscription;

  constructor(
    private elementRef: ElementRef, 
    private readonly cellService: InteractiveCellService) { 

      this.elementRef.nativeElement.style.textAlign = "center";
      this.elementRef.nativeElement.style.border = "1px solid gray";
  }  

  ngOnInit(): void {
    this.clearTrigger$ = 
      this.cellService.clearTrigger$.subscribe((id: string) => this.clearCells(id));
  }

  ngOnDestroy(): void {
    this.clearTrigger$.unsubscribe();
  }

  private clearCells(id: string): void {
    if (this.playerId !== id) return;

    this.selectedIndex = 0;
    this.elementRef.nativeElement.innerText = 
      this.cellService.characters[this.selectedIndex];
  }
}
