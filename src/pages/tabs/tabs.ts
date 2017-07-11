import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SchedulePage } from '../schedule/schedule';
import { PricelistPage } from '../pricelist/pricelist';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SchedulePage;
  tab3Root = PricelistPage;
  tab4Root = PricelistPage;
  tab5Root = HomePage;

  constructor() {

  }
}
