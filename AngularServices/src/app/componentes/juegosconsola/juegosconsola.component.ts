import { Component, OnInit } from '@angular/core';
import { ConsolasService, Consola, Juego } from '../../services/consoles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juegosconsola',
  templateUrl: './juegosconsola.component.html',
  styleUrls: ['./juegosconsola.component.css']
})
export class JuegosconsolaComponent implements OnInit {
  juegos: Promise<Juego[]>;
  idConsola: number;
  searchString: string;

  constructor(
    private consolasService: ConsolasService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params.search) {
        this.searchString = params.search;
        this.juegos = this.consolasService.obtieneJuegosLike(this.searchString).toPromise();
      } else {
        this.idConsola = params.idconsola;
        this.juegos = this.consolasService.obtieneJuegos(this.idConsola).toPromise();
      }
    });
  }

  ngOnInit() {
  }

}
