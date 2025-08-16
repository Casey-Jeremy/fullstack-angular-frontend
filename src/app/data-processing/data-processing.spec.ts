import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProcessing } from './data-processing';

describe('DataProcessing', () => {
  let component: DataProcessing;
  let fixture: ComponentFixture<DataProcessing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataProcessing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataProcessing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
