import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReduxConfigModule } from '../store';

import { MemoryGameComponent } from './memory.game.co';
import { DashboardComponent } from './components/dashboard';
import { LogoComponent } from './components/dashboard/logo.co';
import { MatchInfoComponent } from './components/dashboard/matchInfo.co';
import { ScoreComponent } from './components/dashboard/score.co';
import { ChessboardComponent } from './components/chessboard';


@NgModule({
    imports: [
        BrowserModule,
        ReduxConfigModule
    ],
    declarations: [
        MemoryGameComponent,
        DashboardComponent,
        LogoComponent,
        MatchInfoComponent,
        ScoreComponent,
        ChessboardComponent
    ],
    bootstrap: [MemoryGameComponent]
})
export class GameModule { }
