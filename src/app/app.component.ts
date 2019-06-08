import { Component } from '@angular/core';

import {Post} from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})



export class AppComponent {
  title = 'OpenClassRooms-Angular-application-de-type-blog';
  sousTitre = "Premier exercice du cours Angular d'OpenClassRooms : Créez une application de type blog";

  Posts = [ new Post("titre1","Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
            new Post("titre2","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."),
            new Post("titre3","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")];


}


