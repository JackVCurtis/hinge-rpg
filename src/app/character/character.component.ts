import { Component, OnInit } from '@angular/core';
import { PageService, PageRoute } from '../page.service';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

	constructor(private pageService: PageService) { 
		this.routes = pageService.getRoutes("CHARACTER");
	}

	routes: Array<PageRoute>;

	ngOnInit() {
	}

}
