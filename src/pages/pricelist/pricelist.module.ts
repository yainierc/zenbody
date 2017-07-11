import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PricelistPage } from './pricelist';

@NgModule({
  declarations: [
    PricelistPage,
  ],
  imports: [
    IonicPageModule.forChild(PricelistPage),
  ],
  exports: [
    PricelistPage
  ]
})
export class PricelistPageModule {}
