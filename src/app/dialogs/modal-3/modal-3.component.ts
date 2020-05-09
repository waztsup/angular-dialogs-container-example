import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-3',
  templateUrl: './modal-3.component.html',
  styleUrls: ['./modal-3.component.css']
})
export class Modal3Component implements OnInit {
  @Input() params;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClose(): void {
    this.close.emit({message: 'close modal 3'});
  }
}