import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss'],
})
export class Card1Component implements OnInit {

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
