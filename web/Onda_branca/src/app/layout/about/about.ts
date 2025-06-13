import { Component } from '@angular/core';
import { Teachers } from '../../Teachers';
import { Teacher } from '../../services/teacher';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
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