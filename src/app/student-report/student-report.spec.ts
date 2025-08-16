import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReport } from './student-report';

describe('StudentReport', () => {
  let component: StudentReport;
  let fixture: ComponentFixture<StudentReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
