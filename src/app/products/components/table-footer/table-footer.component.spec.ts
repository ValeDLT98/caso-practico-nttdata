import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFooterComponent } from './table-footer.component';

describe('TableFooterComponent', () => {
  let component: TableFooterComponent;
  let fixture: ComponentFixture<TableFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('change paginator value', () => {
    const compiled = fixture.nativeElement.querySelector('select');
    const paginatorOnChangeSpy = jest.spyOn(component, 'paginatorOnChange');
    expect(compiled.value).toBe('5');

    compiled.value = 10;

    compiled.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(paginatorOnChangeSpy).toHaveBeenCalled();
    expect(compiled.value).toBe('10');
  });
});
