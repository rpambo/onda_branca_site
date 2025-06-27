import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pub } from '../../services/pub';
import { pub } from '../../interfaces';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-seachs',
  imports: [Navbar, CommonModule],
  templateUrl: './seachs.html',
  styleUrl: './seachs.css'
})
export class Seachs {

  query = ''
  pubs : pub[] = []; 

  isRecent(dateString: string): boolean {
    const date = new Date(dateString);
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    return date > oneWeekAgo;
  }

  formatDateOrRecent(dateString: string): string {
    return this.isRecent(dateString)
      ? 'Recente'
      : formatDate(dateString, 'dd/MM/yyyy', 'pt-PT'); // ou 'en-GB' se preferires
  }

  constructor(private router: ActivatedRoute, private service: Pub){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  
    this.router.queryParams.subscribe(params => {
      this.query = params['q'] ?? ' ';
      this.onSearch(this.query)
    }
    )
  }

  onSearch(term : string) {
    this.service.getBySeach(term).subscribe({
      next: (res) => {
        this.pubs = res;
      },
      error: (err) =>{
        console.log(err)
      }
    })
  }
}