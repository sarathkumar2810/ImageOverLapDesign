import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss'],
})
export class Card2Component implements OnInit {

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
