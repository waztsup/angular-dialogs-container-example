import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogsService } from '../../services/dialogs.service';

@Component({
  selector: 'app-modal-1',
  templateUrl: './modal-1.component.html',
  styleUrls: ['./modal-1.component.css']
})
export class Modal1Component implements OnInit {
  @Input() params;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private dialogsService: DialogsService) { }

  ngOnInit() {
  }

  openModal2(): void {
    this.dialogsService.open('modal-2', {});
  }

  onClose(): void {
    this.close.emit({message: 'close modal 1'});
  }

}