import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { StorageServiceService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {
  constructor(private storageServiceService: StorageServiceService) { }

  get favoriteNews(): Article[] {
    return this.storageServiceService.getFavoriteNews
  }
  ngOnInit() {
  }

}
