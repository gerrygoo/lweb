import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewplatformComponent } from './newplatform.component';

describe('NewplatformComponent', () => {
  let component: NewplatformComponent;
  let fixture: ComponentFixture<NewplatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewplatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
