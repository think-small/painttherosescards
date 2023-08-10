import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InteractiveCellDirective } from './directives/interactive-cell/interactive-cell.directive';
import { GridSmComponent } from './grid-sm/grid-sm.component';
import { GridLgComponent } from './grid-lg/grid-lg.component';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { ToggleReadonlyDirective } from './directives/toggle-readonly/toggle-readonly.directive';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    InteractiveCellDirective,
    GridSmComponent,
    GridLgComponent,
    MenuDialogComponent,
    PlayerCardComponent,
    ToggleReadonlyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
