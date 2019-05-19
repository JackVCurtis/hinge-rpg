import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-nav',
  templateUrl: './slide-nav.component.html',
  styleUrls: ['./slide-nav.component.scss']
})
export class SlideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  routes: Array<NavRoute>

}

export interface NavRoute {
	path: string;
	label: string;
}