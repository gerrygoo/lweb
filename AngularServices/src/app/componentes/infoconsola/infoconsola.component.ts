import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService, Consola } from '../../services/consoles.service';

@Component({
  selector: 'app-infoconsola',
  templateUrl: './infoconsola.component.html',
  styleUrls: ['./infoconsola.component.css']
})
export class InfoconsolaComponent implements OnInit {

  consola: Promise<Consola>;
  id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private consolasService: ConsolasService) {

    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.consola = this.consolasService.obtieneConsola(params.id).toPromise();
    });
  }

  ngOnInit() {
  }

}
