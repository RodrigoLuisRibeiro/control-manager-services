import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsReadComponent } from './jobs-read.component';

describe('JobsReadComponent', () => {
  let component: JobsReadComponent;
  let fixture: ComponentFixture<JobsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
