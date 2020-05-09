import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-5',
  templateUrl: './modal-5.component.html',
  styleUrls: ['./modal-5.component.css']
})
export class Modal5Component implements OnInit {
  @Input() params;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClose(): void {
    this.close.emit({message: 'close modal 5'});
  }
}