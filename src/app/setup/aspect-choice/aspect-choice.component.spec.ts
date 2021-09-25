import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectChoiceComponent } from './aspect-choice.component';

describe('AspectChoiceComponent', () => {
  let component: AspectChoiceComponent;
  let fixture: ComponentFixture<AspectChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspectChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AspectChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
