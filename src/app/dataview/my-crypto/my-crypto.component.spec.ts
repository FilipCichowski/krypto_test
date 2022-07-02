import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCryptoComponent } from './my-crypto.component';

describe('MyCryptoComponent', () => {
  let component: MyCryptoComponent;
  let fixture: ComponentFixture<MyCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
