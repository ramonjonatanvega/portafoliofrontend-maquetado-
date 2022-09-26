import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerrComponent } from './bannerr.component';

describe('BannerrComponent', () => {
  let component: BannerrComponent;
  let fixture: ComponentFixture<BannerrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
