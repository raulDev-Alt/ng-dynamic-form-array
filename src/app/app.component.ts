import { Component, OnInit,  VERSION } from '@angular/core';
import { FormArray, FormBuilder,  FormControl,  FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  myFormGroup: FormGroup;
  
  constructor(private _fb: FormBuilder){}

  ngOnInit() {
    this.myFormGroup = this._fb.group({
      'arrayForm': this._fb.array([])
    })
  }

  addFormGroup(){
    const control = <FormArray>this.myFormGroup.controls['arrayForm'];
    control.push(this.getGroupX());
  }

  getGroupX(): FormGroup {
    return this._fb.group({
      'textTest': ['']
    })
  }

  getValue(index: number){
    let f = <FormArray>this.myFormGroup.controls['arrayForm'];
    let v = f.controls[index].get('textTest').value
    console.log(v);
  }

  clearGroup(){
    let f = <FormArray>this.myFormGroup.controls['arrayForm'];
    f.clear();
  }
}
