import { Component, OnInit } from '@angular/core';

import { Card } from '../../../../shared/card';
import { BaseService } from '../../../../shared/base.service';

@Component({
	selector: 'app-card-supervisor',
	templateUrl: './card-supervisor.component.html',
	styleUrls: ['./card-supervisor.component.scss']
})
export class CardSupervisorComponent implements OnInit {
	card: Card;

	constructor(private baseService: BaseService) {}

	ngOnInit() {
		this.card = this.baseService.cards.list.supervisor;
	}
}
