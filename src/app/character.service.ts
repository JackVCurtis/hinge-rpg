import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
	constructor() { 
		this.activeCharacter = { id: "1", name: 'Alice'};
	}
	activeCharacter: Character;

	getCharacter() {
		return this.activeCharacter;
	}
}

interface Character {
	id: string;
	name: string;
}
