import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RECORDS_TYPE, TABLE_HEADERS_TYPE } from '../../constant-files/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  /**
   * PROPERTIES DECORATED WITH @Input() DECORATOR GET THEIR VALUES FROM THE PARENT COMPONENT
   */
  @Input() headers!: TABLE_HEADERS_TYPE[];
  @Input() records!: RECORDS_TYPE[];
  @Input() pagination:any = {
    page: 1,
    sortDirection: -1,
    sortKey: 'createdAt',
    skip: 0,
    limit: 10,
  };
  @Output() TableChange = new EventEmitter<any>();

  constructor(
    /**
     * HERE YOU CAN DO DEPENDENCY INJECTION JUST LIKE Eg. GIVEN BELOW,
     * private alertService: AlertService,
     */
  ) {}

  /**
   * 
   * this function is implemented to update sorting
   * @param sortKey | sort key 
   * @param sortDirection | sort direction 
   */
  updateSorting(sortKey: string, sortDirection: number) {
    this.pagination.sortKey = sortKey;
    this.pagination.sortDirection = sortDirection;
    this.pagination.page = 1;
    this.pagination.skip = 0;
    this.changeInPaginationControls();
  }

  changeInPaginationControls() {
    this.TableChange.next({ ...this.pagination });
  }

  /**
   * WRITE YOUR CODE FOR COMMON TABLE COMPONENT FROM HERE
   */
}
