import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';
import { EventEmitter } from '@angular/core';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit searchTerm event on input change', () => {
    const searchTermEmitter = new EventEmitter<string>();
    component.searchTerm = searchTermEmitter;

    const inputValue = 'search term';

    component.inputValue = inputValue;
    component.inputChange();

    searchTermEmitter.subscribe((searchTerm: string) => {
      expect(searchTerm).toBe(inputValue);
    });
  });
});
