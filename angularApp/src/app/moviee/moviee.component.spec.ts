import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieeComponent } from './moviee.component';

describe('MovieeComponent', () => {
  let component: MovieeComponent;
  let fixture: ComponentFixture<MovieeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
