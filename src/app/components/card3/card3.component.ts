import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss'],
})
export class Card3Component implements OnInit {

  @Input() cardDimension : any
  Background: any;
  Width: any;
  Height: any;

  constructor() { }

  ngOnInit() {
    console.log(this.cardDimension);
    this.Background = this.cardDimension.background;
    this.Width = this.cardDimension.width;
    this.Height = this.cardDimension.height
  }
}
