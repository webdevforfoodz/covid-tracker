import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomechartComponent } from './homechart.component';

describe('HomechartComponent', () => {
  let component: HomechartComponent;
  let fixture: ComponentFixture<HomechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
