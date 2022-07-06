import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCryptoDialogComponent } from './delete-crypto-dialog.component';

describe('DeleteCryptoDialogComponent', () => {
  let component: DeleteCryptoDialogComponent;
  let fixture: ComponentFixture<DeleteCryptoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCryptoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCryptoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
