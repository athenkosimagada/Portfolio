import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [],
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit, OnDestroy {
  @Input() column: boolean = false;
  @Output() linkClicked = new EventEmitter<boolean>();
  
  private routerSubscription: Subscription = new Subscription();
  private visitedUrls: Set<string> = new Set();

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if(this.visitedUrls.size === 0) {
      this.visitedUrls.add(this.router.url);
    }

    this.routerSubscription = this.router.events.subscribe((event) => {
      this.scrollToTop();
      if (event instanceof NavigationStart && !this.visitedUrls.has(event.url)) {
        this.visitedUrls.add(event.url);
        this.showLoader();
      }

      if (event instanceof NavigationEnd || event instanceof NavigationError) {
        setTimeout(() => {
          this.hideLoader();
        }, 100);
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  onMenuClick(route: string) {
    this.linkClicked.emit(false);
    this.router.navigate([route]);
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
  showLoader() {
    if (isPlatformBrowser(this.platformId)) {
      const loadingElement = document.querySelector('.loading') as HTMLElement;
      if (loadingElement) {
        loadingElement.style.display = 'flex';
      }
    }
  }

  hideLoader() {
    if (isPlatformBrowser(this.platformId)) {
      const loadingElement = document.querySelector('.loading') as HTMLElement;
      if (loadingElement) {
        loadingElement.style.display = 'none';
      }
    }
  }
}
