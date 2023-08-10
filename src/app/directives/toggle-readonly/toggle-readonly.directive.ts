import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToggleReadonlyService } from 'src/app/services/toggleReadonly/toggle-readonly.service';

@Directive({
  selector: '[toggleReadonly]'
})
export class ToggleReadonlyDirective implements OnInit, OnDestroy {

  @Input() public playerId!: string;
  public subToggle!: Subscription;
  public isReadonly: boolean = true; 

  constructor(
    private element: ElementRef,
    private readonly toggleService: ToggleReadonlyService) { } 
  
  ngOnInit(): void {
    const inputElement = this.element.nativeElement as HTMLInputElement;
    inputElement.readOnly = this.isReadonly;

    this.subToggle = 
      this.toggleService.toggleTrigger.subscribe((playerId: string) => {
        if (playerId !== this.playerId) return
        
        this.isReadonly = !this.isReadonly;
        inputElement.readOnly = this.isReadonly;

        if (this.isReadonly) {
          this.element.nativeElement.blur();
        }
        else {
          this.element.nativeElement.select();
        }
      });

  }

  ngOnDestroy(): void {
    this.subToggle.unsubscribe();
  }
}
