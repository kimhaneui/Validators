import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomService } from './custom.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mainForm: FormGroup | undefined; // 생성된 폼 저장
  rq: any;
  resolveData: any;
  vm: any;


  constructor(
    private fb: FormBuilder,
    private comValidS: CustomService,
  ) {
    this.mainFormCreate();
  }

  ngOnInit() {

  }

  mainFormCreate() {
    this.mainForm = this.fb.group({
      questionDetail: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      driverBirthday: new FormControl(
        this.vm.driverBirthday,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8),
          // this.comValidS.customPattern({ pattern: /^(((19|20)([2468][048]|[13579][26]|0[48])|2000)0229|((19|20)[0-9]{2}(0[4678]|1[02])(0[1-9]|[12][0-9]|30)|(19|20)[0-9]{2}(0[1359]|11)(0[1-9]|[12][0-9]|3[01])|(19|20)[0-9]{2}02(0[1-9]|1[0-9]|2[0-8])))/, msg: '입력한 형식이 올바르지 않습니다.' })
        ]
      ),
    });
    console.log(this.mainForm, 'this.mainForm');
  }



  public isValidError(control: AbstractControl, submitted: boolean) {
    const formControl = control as FormControl;
    return formControl.errors && (submitted || formControl.dirty || formControl.touched);
  }
}
