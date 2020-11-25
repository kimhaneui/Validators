import { Injectable } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';

@Injectable(

)
export class CustomService {

  constructor() { }

  /**
     * 커스텀 밸리데이션
     */

  customPattern(config: any, invalidPattern?: boolean) {

  }

  /**
   * 생년월일 밸리데이션
   */
  ageFormValidator(config: any, ageCompare?: any) {

  }

}
