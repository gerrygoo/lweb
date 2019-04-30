import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ConsolasService } from '../services/consoles.service';


@Component({
  selector: 'app-newplatform',
  templateUrl: './newplatform.component.html',
  styleUrls: ['./newplatform.component.css']
})
export class NewplatformComponent implements OnInit {

  form: FormGroup = new FormGroup({
    'name': new FormControl(),
    'image': new FormControl(),
    'techSpecs': new FormControl(),
    'games_ids': new FormArray([
      new FormControl(),
      new FormControl(),
      new FormControl(),
    ]),
  });

  constructor(public platformService: ConsolasService) { }

  ngOnInit() { }

  submit() {
    this
    .platformService
    .escribeConsola(this.form .value);
  }

}
