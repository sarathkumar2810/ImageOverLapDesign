import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [Card1Component, Card2Component, Card3Component],
  exports: [Card1Component, Card2Component, Card3Component]
})
export class ComponentModule {}