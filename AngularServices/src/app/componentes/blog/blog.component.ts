import { Component, OnInit } from '@angular/core';
import { Post, ConsolasService } from '../../services/consoles.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Promise<Post[]>;
  content: string;
  author: string;

  constructor(private consolasService: ConsolasService) { }

  ngOnInit() {
    this.posts = this.consolasService.obtienePosts().toPromise();
  }

  submit() {
    console.log(this.author);
    console.log(this.content);
  }
}
