import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ConsolasService } from '../services/consoles.service';


@Component({
  selector: 'app-newplatform',
  templateUrl: './newplatform.component.html',
  styleUrls: ['./newplatform.component.css']
})
export class NewplatformComponent implements OnInit {

  form: FormGroup;

  constructor(public platformService: ConsolasService) {
    this.form = new FormGroup({
      'name': new FormControl(''),
      'image': new FormControl(''),
      'techSpecs': new FormControl(''),
      'games_ids': new FormControl(''),
    });
  }

  ngOnInit() { }

  async submit() {
    console.log(await this.platformService.escribeConsola({
      ...this.form.value,
      games_ids: this.form.value.games_ids ? this.form.value.games_ids.split(',') : [ ],
    }));
  }
}
