import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../Post';


@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html'
})
export class PostListComponentComponent implements OnInit {

  @Input() posts : Array<Post>;

  constructor() { }

  ngOnInit() {
  }

}
