import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Component({
  selector: 'app-push-form',
  templateUrl: './push-form.component.html',
  styleUrls: ['./push-form.component.scss']
})

export class PushFormComponent {
  profileForm = this.fb.group({
    title: [''],
    message: [''],
    url: [''],
    icon: [''],
    image: ['']
  });

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  
    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.warn(this.profileForm.value);
      console.log(this.profileForm.value.title);
      

      const req = this.http.post('https://ax7asfdg4f.execute-api.ap-southeast-2.amazonaws.com/prod', {
          title: this.profileForm.value.title,
          option:{
            body: this.profileForm.value.message,
            image: this.profileForm.value.image,
            icon: this.profileForm.value.icon,
            data: {
              url: this.profileForm.value.url
            }
          }
        })
          .subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log("Error occured");
            }
          );
    }
  }