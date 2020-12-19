import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesdataComponent } from './statesdata.component';

describe('StatesdataComponent', () => {
  let component: StatesdataComponent;
  let fixture: ComponentFixture<StatesdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatesdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
