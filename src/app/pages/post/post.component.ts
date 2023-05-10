import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {fakeData} from '../../data/fakeData';

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
  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>{
      this.id = value.get('id');
      this.setComponentProperties(this.id);
    });
  }

  setComponentProperties(id: string | null) {
    let result = fakeData.filter(data => data.id == id)[0];
    if (result) {
      this.coverImage = result.image;
      this.coverImageAlt = result.imageAlt;
      this.title = result.title;
      this.description = result.description;
    }
  }
}
