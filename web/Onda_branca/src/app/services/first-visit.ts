import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FirstVisit {
  private storageKey = 'visited-home';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  hasVisited(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.storageKey) === 'true';
    }
    return false; // no server sempre false
  }

  markAsVisited(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, 'true');
    }
  }
}