import { Component, inject, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-book-details',
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  @Input() details: any;
  private modalService = inject(NgbModal);
  content!: TemplateRef<BookDetailsComponent>;


  constructor() { }

  openLg(content: TemplateRef<BookDetailsComponent>) {
    this.modalService.open(content, { size: 'lg' });
  }
}
