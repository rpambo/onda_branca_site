import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { NgParticlesService } from '@tsparticles/angular';
import { loadSlim } from "@tsparticles/slim"; 
import { NgxParticlesModule } from "@tsparticles/angular";

@Component({
  selector: 'app-particles-background',
  standalone: true,
  imports: [NgxParticlesModule],
  templateUrl: './particles-background.html',
  styleUrls: ['./particles-background.css']
})
export class ParticlesBackground implements OnInit {
  id = "tsparticles";

  // Mova as opções para dentro de uma função para evitar execução no servidor
  get particlesOptions() {
    return {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
          },
          onHover: {
            enable: true,
          },
          resize: {
            enable: true
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#0067A3",
        },
        links: {
          color: "#0067A3",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 180,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 10 },
        },
      },
      detectRetina: true,
    };
  }

  // Adicione uma flag para controlar se está no navegador
  isBrowser: boolean = false;

  constructor(
    private readonly ngParticlesService: NgParticlesService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // Só inicialize no navegador
    if (this.isBrowser) {
      this.ngParticlesService.init(async (engine) => {
        await loadSlim(engine);
      });
    }
  }
}