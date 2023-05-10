import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input() contentId: string = "0";
  @Input() image: string = "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png";
  @Input() imageAlt: string = "Image Placeholder";
  @Input() title: string = "Title";
  @Input() description: string = "Description";
}
