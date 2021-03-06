import { Component, OnDestroy, OnInit, ElementRef } from '@angular/core';

import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss'],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modal: ModalService, public el: ElementRef) {}

  ngOnInit(): void {
    this.modal.register('auth');
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.modal.unregister('auth');
  }
}
