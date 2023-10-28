import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  // Here we are injecting the service
  constructor( private dbzService: DbzService ) {}

  // With this property you have access to the outside world
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  // Here we are accessing the private parameter with these methods
  onDeleteCharacter( id: string ):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ):void {
    this.dbzService.addCharacter( character );
  }

}
