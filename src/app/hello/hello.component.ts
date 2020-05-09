import { Component, Input } from '@angular/core';
import { DialogsService } from '../services/dialogs.service'

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  constructor(private dialogsService: DialogsService) {}

  openModal(id: string, params): void {
    console.log(id);
    this.dialogsService.open(id, params)
      .subscribe(result => {
        if (result.id === id) {
          alert(JSON.stringify(result.result));
        }
      });
  }
}
