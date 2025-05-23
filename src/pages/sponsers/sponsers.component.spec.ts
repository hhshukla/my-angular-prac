import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsersComponent } from './sponsers.component';

describe('SponsersComponent', () => {
  let component: SponsersComponent;
  let fixture: ComponentFixture<SponsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
