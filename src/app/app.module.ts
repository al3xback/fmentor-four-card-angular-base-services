import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CardsComponent } from './main/cards/cards.component';
import { CardIntroComponent } from './main/cards/card-intro/card-intro.component';
import { CardListComponent } from './main/cards/card-list/card-list.component';
import { CardSupervisorComponent } from './main/cards/card-list/card-supervisor/card-supervisor.component';
import { CardCalculatorComponent } from './main/cards/card-list/card-calculator/card-calculator.component';
import { CardKarmaComponent } from './main/cards/card-list/card-karma/card-karma.component';
import { CardTeamBuilderComponent } from './main/cards/card-list/card-team-builder/card-team-builder.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MainComponent,
		CardsComponent,
		CardIntroComponent,
		CardListComponent,
		CardSupervisorComponent,
		CardTeamBuilderComponent,
		CardKarmaComponent,
		CardCalculatorComponent,
		FooterComponent
	],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
