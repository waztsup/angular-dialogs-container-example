import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DialogsService {
  private openDialog: Subject<any> = new Subject();
  private closeDialog: Subject<any> = new Subject();
  private availableModals = ['modal-1','modal-2','modal-3','modal-4','modal-5']
  constructor() {}

  init(): void {
    // this.openDialog = new Subject();
    // this.closeDialog = new Subject();
  }

  getAvailableModals(): string[] {
    return this.availableModals;
  }

  getOpenObs(): Observable<any> {
    return this.openDialog.asObservable();
  }

  open(id: string, params: any): Observable<any> {
    this.openDialog.next({
      id,
      params
    });
    return this.closeDialog.asObservable();
  }

  close(id: string, result: any): void {
    this.closeDialog.next({
      id,
      result
    });
  }
}
