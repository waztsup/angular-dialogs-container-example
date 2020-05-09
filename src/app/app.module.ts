import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Modal1Component } from './dialogs/modal-1/modal-1.component';
import { Modal2Component } from './dialogs/modal-2/modal-2.component';
import { DialogsContainer } from './dialogs-container/dialogs-container.component';
import { Modal3Component } from './dialogs/modal-3/modal-3.component';
import { Modal4Component } from './dialogs/modal-4/modal-4.component';
import { Modal5Component } from './dialogs/modal-5/modal-5.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DialogsContainer, Modal1Component, Modal2Component, Modal3Component, Modal4Component, Modal5Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
