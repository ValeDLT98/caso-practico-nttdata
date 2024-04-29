import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrl: './table-footer.component.css',
})
export class TableFooterComponent {
  @Output()
  public valueEmitter: EventEmitter<number> = new EventEmitter();

  public value: string = '5';
  public selectedValue: string = '5';

  paginatorOnChange() {
    this.value = this.selectedValue;
    this.valueEmitter.emit(parseInt(this.value));
  }
}
