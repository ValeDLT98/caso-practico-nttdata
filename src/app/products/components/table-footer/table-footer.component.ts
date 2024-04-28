import { Component } from '@angular/core';

@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrl: './table-footer.component.css',
})
export class TableFooterComponent {
  public paginator: string = '5';
  public selectedValue: string = '5';

  paginatorOnChange() {
    this.paginator = this.selectedValue;
  }
}
