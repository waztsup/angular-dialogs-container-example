import { Component, Input } from "@angular/core";
import { DialogsService } from "../services/dialogs.service";

@Component({
  selector: "app-dialogs-container",
  templateUrl: "./dialogs-container.component.html",
  styles: []
})
export class DialogsContainer {
  modals: any = [];
  containerClass: boolean = false;

  constructor(private dialogsService: DialogsService) {
    this.dialogsService.getOpenObs().subscribe(res => {
      this.modals[res.id].opened = true;
      this.modals[res.id].params = res.params ? res.params : {};
      this.containerClass = true;
    });

    this.dialogsService.getAvailableModals().forEach(el => {
      this.modals[el] = {
        opened: false,
        params: {}
      };
    });
  }

  onCloseClick(id: string, result: any): void {
    this.dialogsService.close(id, result);
    this.modals[id].opened = false;
    this.modals[id].params = {};
    if (!this.modals.every(modal => modal.opened)) {
      this.containerClass = false;
    }
  }
}
