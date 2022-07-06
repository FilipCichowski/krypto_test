import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedRowIdService {
  private selectedRowId: string = "";

  setSelectedRowId(id: string) {
    this.selectedRowId = id;
  }

  getSelectedRowId() {
    return this.selectedRowId;
  }

  constructor() { }
}
