import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})

export class App {
  protected title = 'Onda_branca';
  
  circles = Array(20); // Quantidade de círculos

  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
  if (!isPlatformBrowser(this.platformId)) return; // só roda no browser

  const coords = { x: 0, y: 0 };
  const circles = this.el.nativeElement.querySelectorAll('.circle');

  const colors = [
    "#0067A3", "#9A74A1", 
  ];

  circles.forEach((circle: HTMLElement, index: number) => {
    (circle as any).x = 0;
    (circle as any).y = 0;
    this.renderer.setStyle(circle, 'background-color', colors[index % colors.length]);
  });

  window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });

  const animateCircles = () => {
    let x = coords.x;
    let y = coords.y;

    circles.forEach((circle: HTMLElement, index: number) => {
      this.renderer.setStyle(circle, 'left', `${x - 12}px`);
      this.renderer.setStyle(circle, 'top', `${y - 12}px`);
      this.renderer.setStyle(circle, 'scale', `${(circles.length - index) / circles.length}`);

      (circle as any).x = x;
      (circle as any).y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += ((nextCircle as any).x - x) * 0.3;
      y += ((nextCircle as any).y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
  };

  animateCircles();
}
}