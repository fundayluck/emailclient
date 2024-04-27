import { FormControl, ValidationErrors, Validator } from '@angular/forms';

export class MatchPassword implements Validator {
  validate(formGroup: FormControl) {
    const { password, confirmPassword } = formGroup.value;

    if (password === confirmPassword) {
      return null;
    } else {
      return { passwordsDontMatch: true };
    }
  }
}
