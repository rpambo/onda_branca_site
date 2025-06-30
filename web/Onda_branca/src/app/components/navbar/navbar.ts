import { NgClass} from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { Router, RouterModule, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, ReactiveFormsModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})

export class Navbar {
  activeSection: string = "home"
  scrolled = false;
  
  constructor(private route : Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;

        if (url === '/' || url.startsWith('/#')) {
          this.activeSection = 'home';
        } else if (url.startsWith('/sobre')) {
          this.activeSection = 'sobre';
        } else if (url.includes('servico')) {
          this.activeSection = 'servico';
        } else if (url.includes('testemunho')) {
          this.activeSection = 'testemunho';
        } else if (url.includes('/publicacao')) {
          this.activeSection = 'publicacao';
        } else {
          this.activeSection = '';
        }
      }
    });
  }

  setActive(active: string){
    this.activeSection = active
  }

  fb = inject(NonNullableFormBuilder)

  form = this.fb.group({
    search: this.fb.control("")
  })

  onSearch(): void {
    var term = this.form.controls.search.value.trim()

    if (!term){
      term =  encodeURIComponent(" ")
    }
    
    console.log("termo pesquisado ", term)

    this.route.navigate(['/search'], {queryParams: {q : term}})
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }
}
