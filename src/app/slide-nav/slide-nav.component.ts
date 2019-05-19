import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService, PageRoute } from '../page.service';

@Component({
  selector: 'app-slide-nav',
  templateUrl: './slide-nav.component.html',
  styleUrls: ['./slide-nav.component.scss']
})
export class SlideNavComponent implements OnInit {

  constructor(private pageService: PageService, private route: ActivatedRoute) { }

  @Input()
  routes: Array<PageRoute>;

  ngOnInit() { 
  }

  getActiveRoute() {
  	return this.routes.find((r) => {
  		return r.path == this.route.snapshot.url.join('/');
  	}) 
  }

}

