import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-4',
  templateUrl: './modal-4.component.html',
  styleUrls: ['./modal-4.component.css']
})
export class Modal4Component implements OnInit {
  @Input() params;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClose(): void {
    this.close.emit({message: 'close modal 4'});
  }
}