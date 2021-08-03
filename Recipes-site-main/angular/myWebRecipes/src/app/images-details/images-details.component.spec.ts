import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesDetailsComponent } from './images-details.component';

describe('ImagesDetailsComponent', () => {
  let component: ImagesDetailsComponent;
  let fixture: ComponentFixture<ImagesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
