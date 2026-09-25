import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginTemplateDrivenForm } from './login-template-driven-form';

describe('LoginTemplateDrivenForm', () => {
  let component: LoginTemplateDrivenForm;
  let fixture: ComponentFixture<LoginTemplateDrivenForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginTemplateDrivenForm],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginTemplateDrivenForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
