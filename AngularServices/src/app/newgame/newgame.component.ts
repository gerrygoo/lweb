import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ConsolasService } from '../services/consoles.service';

@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.css']
})
export class NewgameComponent implements OnInit {

  form: FormGroup;

  constructor(public platformService: ConsolasService) {
    this.form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      developer: new FormControl(''),
      cover: new FormControl(''),

      images: new FormControl(''),
      links: new FormControl(''),

      date: new FormControl(''),
    });
  }

  async submit() {
    console.log(await this.platformService.escribeJuego({
      ...this.form.value,
      images: this.form.value.images ? this.form.value.images.split('|') : [ ],
      links: this.form.value.links ? this.form.value.links.split('|') : [ ],
      date: new Date(),
    }));
  }

  ngOnInit() {
  }

}
