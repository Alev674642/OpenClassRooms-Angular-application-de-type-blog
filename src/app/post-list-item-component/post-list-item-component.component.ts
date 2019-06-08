import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../Post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input()  post : Post;

  constructor() { }

  ngOnInit() {
  }

  onLoveClick(){
    this.post.loveIts +=1;
  }

  onDontLoveClick(){
    this.post.loveIts -=1;
  }

  isLove(){
    return this.post.loveIts>=0;
  }

}
