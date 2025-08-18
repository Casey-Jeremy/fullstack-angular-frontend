import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGeneration } from './data-generation';

describe('DataGeneration', () => {
  let component: DataGeneration;
  let fixture: ComponentFixture<DataGeneration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataGeneration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataGeneration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
