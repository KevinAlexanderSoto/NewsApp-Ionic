import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { IonSegmentCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  public categories: String[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  public initialSelectecCategory: String = this.categories[0];

  constructor() { }

  ngOnInit() {
    console.log(this.categories);
  }

  onSegmentChanged(event: IonSegmentCustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail.value);
  }

}
