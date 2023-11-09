import { Component, OnInit } from '@angular/core';

import { Card } from '../../../../shared/card';
import { BaseService } from '../../../../shared/base.service';

@Component({
	selector: 'app-card-karma',
	templateUrl: './card-karma.component.html',
	styleUrls: ['./card-karma.component.scss']
})
export class CardKarmaComponent implements OnInit {
	card: Card;

	constructor(private baseService: BaseService) {}

	ngOnInit() {
		this.card = this.baseService.cards.list.karma;
	}
}
