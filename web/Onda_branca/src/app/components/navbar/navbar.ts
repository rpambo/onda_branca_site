import { CommonModule, NgClass} from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { Router, RouterModule, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})

export class Navbar {
  activeSection: string = "home"
  scrolled = false;
  comunidade = true
  constructor(private route : Router, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
        } else if (url.includes('bem-estar')){
          this.activeSection = 'bem-estar';
        } else if (url.includes('testemunho')) {
          this.activeSection = 'testemunho';
        } else if (url.includes('/publicacao')) {
          this.activeSection = 'publicacao';
        } else if (url.includes('/comunidade')){
          this.comunidade = false
          this.cdr.detectChanges()
        } else {
          this.activeSection = '';
        }
      }
    });
  }

  setActive(active: string){
    if (active == "comunidade"){
      this.comunidade = false
    }
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
