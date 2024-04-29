import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  public inputValue: string = '';

  @Output()
  public searchTerm: EventEmitter<string> = new EventEmitter();

  inputChange() {
    this.searchTerm.emit(this.inputValue);
  }
}
