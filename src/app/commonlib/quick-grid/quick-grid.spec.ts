import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuickGrid } from './quick-grid';

describe('QuickGrid', () => {
  let component: QuickGrid;
  let fixture: ComponentFixture<QuickGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
