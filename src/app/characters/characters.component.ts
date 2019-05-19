import { Component, OnInit } from '@angular/core';
import { PageService, PageRoute } from '../page.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

	constructor(private pageService: PageService) { 
		this.routes = pageService.getRoutes("CHARACTER");
	}

	routes: Array<PageRoute>;

	ngOnInit() {
	}
}
