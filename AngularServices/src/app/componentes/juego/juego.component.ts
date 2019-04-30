import { Component, OnInit } from '@angular/core';
import { ConsolasService, Consola, Juego } from '../../services/consoles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  juego: Promise<Juego>;

  constructor(
    private consolasService: ConsolasService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.juego = this.consolasService.obtieneJuego(params.idjuego).toPromise();
    });
  }

  ngOnInit() {
  }

}
