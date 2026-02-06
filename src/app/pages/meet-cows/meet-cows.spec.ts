import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetCows } from './meet-cows';

describe('MeetCows', () => {
  let component: MeetCows;
  let fixture: ComponentFixture<MeetCows>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetCows]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetCows);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
