import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Teacher } from '../../services/teacher';
import { Teachers } from '../../interfaces';

@Component({
  selector: 'app-testemunhos',
  imports: [CommonModule],
  templateUrl: './testemunhos.html',
  styleUrl: './testemunhos.css'
})
export class Testemunhos {
  teachers: Teachers[] = []
  
    constructor(private teacherServices: Teacher){}
  
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
  
      this.teacherServices.getAllTeachers().subscribe({
        next: (res) => {
          this.teachers = res;
        },
        error: (err) =>{
          console.error(err)
        }
      })
    }
}
