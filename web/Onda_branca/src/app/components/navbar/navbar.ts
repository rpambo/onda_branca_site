import { NgClass } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})

export class Navbar {
  scrolled = false;
  fb = inject(NonNullableFormBuilder)

  form = this.fb.group({
    search: this.fb.control("")
  })

  constructor(private route : Router){}

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
