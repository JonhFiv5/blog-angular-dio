import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  coverImage: string = "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png";
  coverImageAlt: string = "Image Placeholder";
  title: string = "Title";
  description: string = "Description";
}
