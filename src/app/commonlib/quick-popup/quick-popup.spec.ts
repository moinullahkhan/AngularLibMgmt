import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuickPopup } from './quick-popup';

describe('QuickPopup', () => {
  let component: QuickPopup;
  let fixture: ComponentFixture<QuickPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickPopup],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
