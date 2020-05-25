import { Component, Input, OnDestroy } from '@angular/core';
import { DialogsService } from '../services/dialogs.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnDestroy {

  @Input() name: string;
  private subscription: Subscription;

  constructor(private dialogsService: DialogsService) {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  openModal(id: string, params): void {
    const open = this.dialogsService.open(id, params)
    if (!this.subscription) {
      this.subscription = open.subscribe(result => {
        const message = JSON.stringify(result.result);
        if (result.id === 'modal-1') {
          alert(message);
        } else {
          console.log(message);
        }
      });
    }
      
  }
}