import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-2',
  templateUrl: './modal-2.component.html',
  styleUrls: ['./modal-2.component.css']
})
export class Modal2Component implements OnInit {
  @Input() params;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClose(): void {
    this.close.emit({message: 'close modal 2'});
  }
}