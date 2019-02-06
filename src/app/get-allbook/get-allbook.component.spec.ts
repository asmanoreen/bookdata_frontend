import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllbookComponent } from './get-allbook.component';

describe('GetAllbookComponent', () => {
  let component: GetAllbookComponent;
  let fixture: ComponentFixture<GetAllbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
