import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { CharacterService } from './character.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private router: Router, private characterService: CharacterService) {
  	this.groups.CHARACTER = [
	  	{
	  		path: 'characters',
	  		label: 'Characters',
	  		context: {}
	  	},
	  	{
	  		path: 'characters/{id}',
	  		label: '{name}',
	  		contextProvider: () => {
	  			return this.characterService.getCharacter();
	  		}
	  	}
  	]
  }

  groups: PageRouteGroups = { CHARACTER: []};

  navigate(route: PageRoute) {
  	const context = route.context || route.contextProvider();
  	const compiledPath = this.buildFromContext(route.path, context);
  	this.router.navigate([compiledPath]);
  }

  buildFromContext(template: string, context: any) {
  	return template.replace(/\{.*?\}/, (match) => {
  		return context[match.replace('{', '').replace('}', '')];
  	})
  }

  getRoutes(groupId: string): Array<PageRoute> {
  	return this.groups[groupId].map((route) => {
  		const context = route.context || route.contextProvider();
	  	const compiledPath = this.buildFromContext(route.path, context);
	  	const compiledLabel = this.buildFromContext(route.label, context);
  		return {path: compiledPath, label: compiledLabel}
  	})
  }
}

interface PageRouteGroups {
	CHARACTER: Array<PageRoute>
}

export interface PageRoute {
	path: string;
	label: string;
	context ?: any;
	contextProvider ?: Function;
}