import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AISearchComponent } from './ai-search.component';

describe('AISearchComponent', () => {
  let component: AISearchComponent;
  let fixture: ComponentFixture<AISearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AISearchComponent]
    });
    fixture = TestBed.createComponent(AISearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
