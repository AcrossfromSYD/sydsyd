import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SformComponent } from './sform.component';

describe('SformComponent', () => {
  let component: SformComponent;
  let fixture: ComponentFixture<SformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
