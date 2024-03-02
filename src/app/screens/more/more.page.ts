import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {


  ngOnInit() {
    const todo = "";
  }
  private readonly GH_URL =
    'https://github.com/capacitor-community/privacy-screen';

  constructor() { }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

}
