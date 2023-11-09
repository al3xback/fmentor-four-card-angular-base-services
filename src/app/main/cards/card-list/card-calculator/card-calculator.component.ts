import { Component, OnInit } from '@angular/core';

import { Card } from '../../../../shared/card';
import { BaseService } from '../../../../shared/base.service';

@Component({
	selector: 'app-card-calculator',
	templateUrl: './card-calculator.component.html',
	styleUrls: ['./card-calculator.component.scss']
})
export class CardCalculatorComponent implements OnInit {
	card: Card;

	constructor(private baseService: BaseService) {}

	ngOnInit() {
		this.card = this.baseService.cards.list.calculator;
	}
}
