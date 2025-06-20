import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-publicacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publicacao.html',
  styleUrl: './publicacao.css'
})
export class Publicacao implements AfterViewInit {

  async ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      const flatpickr = (await import('flatpickr')).default;
      flatpickr('#datepicker', {
        dateFormat:'d-m-y',
        minDate:'today',
        disable:[
          function(date){
            return (date.getDay() == 0 || date.getDay() == 6);
          }
        ]
      });
    }
  }
}
