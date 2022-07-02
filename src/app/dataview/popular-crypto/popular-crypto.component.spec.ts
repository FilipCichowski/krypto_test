import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCryptoComponent } from './popular-crypto.component';

describe('PopularCryptoComponent', () => {
  let component: PopularCryptoComponent;
  let fixture: ComponentFixture<PopularCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularCryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
