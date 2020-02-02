import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public config: any = {
    height: 150,
    toolbar: [
      ['misc', ['undo', 'redo']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
      ['fontsize', ['fontsize', 'color']],
      ['para', ['ul', 'ol', 'paragraph', 'height']],
    ],
  };
  public contactUsFormGroup: FormGroup = this.formBuilder.group({
    'contactUsName': ['', [Validators.required]],
    'contactUsEmail': ['', [Validators.required]],
    'contactUsSubject': ['', [Validators.required]],
    'contactUsDesc': ['', [Validators.required]]
  });
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  // ​function googleTranslateElementInit() {
  //   new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  // }

  contactUsFormSubmit(){
    console.log(this.contactUsFormGroup.controls['contactUsName'].value,
    this.contactUsFormGroup.controls['contactUsEmail'].value,
    this.contactUsFormGroup.controls['contactUsSubject'].value,
    this.contactUsFormGroup.controls['contactUsDesc'].value,
    )
  }

}
