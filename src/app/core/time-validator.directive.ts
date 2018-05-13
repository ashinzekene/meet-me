import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appTimeValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: TimeValidatorDirective }]
})
export class TimeValidatorDirective implements Validator {
  @Input('appTimeValidator') test: string
  validate(control: AbstractControl): { [key: string]: any } {
    return timeValidator()
  }

}

function timeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    let hm: Array<string> = control.value.split(':')
    try {
      let hmNum: Array<number> = hm.map(parseInt)
      if (hmNum.length !== 2) {
        return { 'wrong-time': { value: control.value } }
      }
      if (hmNum[0] > 12) {
        return { 'wrong-time': { value: control.value } }
      }
      if (hmNum[1] > 59) {
        return { 'wrong-time': { value: control.value } }
      }
    } catch (err) {
      return { 'wrong-time': { value: control.value } }
    }
    return null
  };
}
