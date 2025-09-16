import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  activeSection: string = "home";
  scrolled = false;
  comunidade = true;

  lastScrollTop = 0;
  scrolledUp = true;
  atTop = true;

  private isBrowser: boolean;

  constructor(
    private route: Router,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.isBrowser) {
        const currentScroll = Math.max(
          window.pageYOffset || document.documentElement.scrollTop,
          0
        );
        this.atTop = currentScroll <= 10;
        this.scrolledUp = true;
        this.lastScrollTop = currentScroll;
      }
    });
  }

  ngOnInit(): void {
    const currentUrl = this.route.url;
    if (currentUrl.includes('/comunidade')) {
      this.comunidade = false;
    }

    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;

        if (url === '/' || url.startsWith('/#')) {
          this.activeSection = 'home';
        } else if (url.startsWith('/sobre')) {
          this.activeSection = 'sobre';
        } else if (url.includes('radio')) {
          this.activeSection = 'radio';
        } else if (url.includes('treinamentos')) {
          this.activeSection = 'treinamentos';
        } else if (url.includes('bem-estar')) {
          this.activeSection = 'bem-estar';
        } else if (url.includes('testemunho')) {
          this.activeSection = 'testemunho';
        } else if (url.includes('/publicacao')) {
          this.activeSection = 'publicacao';
        } else if (url.includes('/comunidade')) {
          this.comunidade = false;
          this.cdr.detectChanges();
        } else {
          this.activeSection = '';
        }
      }
    });
  }

  setActive(active: string) {
    if (active === "comunidade") {
      this.comunidade = false;
    }
    this.activeSection = active;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isBrowser) return; // só executa no browser

    const currentScroll = Math.max(
      window.pageYOffset || document.documentElement.scrollTop,
      0
    );

    this.atTop = currentScroll <= 0;
    this.scrolledUp = currentScroll < this.lastScrollTop;
    this.lastScrollTop = currentScroll;
  }
}