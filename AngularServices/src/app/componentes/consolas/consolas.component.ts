import { Component, OnInit } from '@angular/core';
import { ConsolasService, Consola } from '../../services/consoles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.css']
})
export class ConsolasComponent implements OnInit {

  consolas: Promise<Consola[]>;
  searchString: string;

  constructor(
    private consolasService: ConsolasService,
    private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      // console.log(params.search);
      this.searchString = params.search;
      this.consolas = this.consolasService.obtieneConsolas(this.searchString).toPromise();
    });
  }

  ngOnInit() {
  }
}
