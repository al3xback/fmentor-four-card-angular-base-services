import { Component, OnInit } from '@angular/core';

import { Card } from 'src/app/shared/card';
import { BaseService } from '../../../../shared/base.service';

@Component({
	selector: 'app-card-team-builder',
	templateUrl: './card-team-builder.component.html',
	styleUrls: ['./card-team-builder.component.scss']
})
export class CardTeamBuilderComponent implements OnInit {
	card: Card;

	constructor(private baseService: BaseService) {}

	ngOnInit() {
		this.card = this.baseService.cards.list.teamBuilder;
	}
}
