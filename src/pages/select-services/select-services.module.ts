import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectServicesPage } from './select-services';

@NgModule({
  declarations: [
    SelectServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectServicesPage),
  ],
  exports: [
    SelectServicesPage
  ]
})
export class SelectServicesPageModule {}
