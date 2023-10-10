import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  
  @Output() pageChangeEvent = new EventEmitter<any>();

  maxSize = 3;
  rotate = true;
  ellipses = true;
  boundaryLinks = true;
  @Input() collectionSize= 120;
  @Input() page = 1;
  @Input() pageSize = 20;

  constructor() { }

  /**
   * 
   * @param e // page change event.
   */
  onPageChange(e:any) {
    this.pageChangeEvent.emit(e)
  }

  change(e:any) {
    e.stopPropagation();
  }
}
