import { Component, OnInit } from '@angular/core';

import { Summary } from '../../../shared/summary';
import { BaseService } from '../../../shared/base.service';

@Component({
	selector: 'app-card-intro',
	templateUrl: './card-intro.component.html',
	styleUrls: ['./card-intro.component.scss']
})
export class CardIntroComponent implements OnInit {
	summary: Summary;

	constructor(private baseService: BaseService) {}

	ngOnInit() {
		this.summary = this.baseService.cards.intro;
	}
}
