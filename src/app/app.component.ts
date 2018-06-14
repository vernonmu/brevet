import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  angularForm = new FormGroup({
    name: new FormControl()
  });

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angularForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit(form: any): void {
    console.log('you submitted value: ', form)
  }

  // postInquiry(form).then(function(response){
  //       $scope.form.firstname='',
  //       $scope.form.lastname='',
  //       $scope.form.phone='',
  //       $scope.form.email='',
  //       $scope.form.typeofproj='',
  //       $scope.form.comment=''
  //       $scope.messages = 'Your form has been submitted!'
  //       $timeout(function () {
  //         $scope.messages = '';
  //       }, 3000);
  // });
}
