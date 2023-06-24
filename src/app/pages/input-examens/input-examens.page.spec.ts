import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputExamensPage } from './input-examens.page';

describe('InputExamensPage', () => {
  let component: InputExamensPage;
  let fixture: ComponentFixture<InputExamensPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InputExamensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
