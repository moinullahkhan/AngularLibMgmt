import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuickAccordian } from './quick-accordian';

describe('QuickAccordian', () => {
  let component: QuickAccordian;
  let fixture: ComponentFixture<QuickAccordian>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickAccordian],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickAccordian);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
