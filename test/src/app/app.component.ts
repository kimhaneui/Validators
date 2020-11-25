import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mainForm: FormGroup | undefined; // 생성된 폼 저장
  rq: any;
  resolveData: any;

  constructor(
    private fb: FormBuilder,
  ) {
    this.mainFormCreate();
  }

  ngOnInit() {

  }

  mainFormCreate() {
    this.mainForm = this.fb.group({
      questionDetail: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    });
    console.log(this.mainForm, 'this.mainForm');
  }



  public isValidError(control: AbstractControl, submitted: boolean) {
    const formControl = control as FormControl;
    return formControl.errors && (submitted || formControl.dirty || formControl.touched);
  }
}
