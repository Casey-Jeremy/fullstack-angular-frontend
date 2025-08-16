import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUpload } from './data-upload';

describe('DataUpload', () => {
  let component: DataUpload;
  let fixture: ComponentFixture<DataUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
