import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { FileUploader, FileLikeObject } from 'ng2-file-upload';

const URL = 'http://localhost:3000/fileupload/';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componentes3';

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [{ value: "", disabled: true }, Validators.required],
      // lastName: [{ value: "", disabled: true }, Validators.required]
    });
  }
  disableField(checked) {
    Object.keys(this.f).forEach(key => {
      if (!checked) {
        this.f[key].disable();
      } else {
        this.f[key].enable();
      }
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //     return;
  //   }

  //   // display form values on success
  //   alert(
  //     "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
  //   );
  // }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  // upload inicio

  public uploader: FileUploader = new FileUploader({
    url: URL,
    disableMultipart : false,
    autoUpload: true,
    method: 'post',
    itemAlias: 'attachment',
    allowedFileType: ['image', 'pdf']


    });

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    console.log(file);

  }

  //upload final

}
