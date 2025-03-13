import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../service/api.service';



@Component({
  selector: 'app-book-card',
  imports: [CommonModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent implements OnInit {
  @Input() books: any[] = [];
  imageUrl!: string;

  constructor(private apiService:ApiService) { }
  ngOnInit(): void {
  }

}
