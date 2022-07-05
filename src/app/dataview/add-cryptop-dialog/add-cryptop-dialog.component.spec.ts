import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCryptopDialogComponent } from './add-cryptop-dialog.component';

describe('AddCryptopDialogComponent', () => {
  let component: AddCryptopDialogComponent;
  let fixture: ComponentFixture<AddCryptopDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCryptopDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCryptopDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
