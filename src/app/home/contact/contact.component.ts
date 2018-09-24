import { Component, OnInit, ViewChild } from '@angular/core';
import {NgxFormUtils} from 'ngx-form-utils';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor() { }

  ngOnInit() {
  }
  getErrors(str: string) {
    if (!this.form || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.form, str);
    }

}
