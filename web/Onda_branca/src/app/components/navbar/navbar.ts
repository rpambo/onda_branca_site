import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }
}
