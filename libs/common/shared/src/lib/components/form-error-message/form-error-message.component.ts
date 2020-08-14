import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'common-form-error-message',
  templateUrl: './form-error-message.component.html',
  styleUrls: ['./form-error-message.component.scss']
})
export class FormErrorMessageComponent implements OnInit {
  @Input() formControl: FormControl;
  @Input() formError: any;
  constructor() { }

  ngOnInit() {
  }


  errorCount(errors, type) {
     console.log(errors, type,  Object.keys(errors),  Object.keys(errors).findIndex(zzz=> zzz=== type))
  //    console.log(errors[type] && Object.keys(errors).findIndex(type) === 0)
   return  errors[type] && Object.keys(errors).findIndex(key=> key === type) === 0
  }
}
