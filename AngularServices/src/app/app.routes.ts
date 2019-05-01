import { RouterModule, Routes } from '@angular/router';

// Se tienen que importar todas las rutas que vamos a utilizar
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ConsolasComponent } from './componentes/consolas/consolas.component';
import { InfoconsolaComponent } from './componentes/infoconsola/infoconsola.component';
import { JuegosconsolaComponent } from './componentes/juegosconsola/juegosconsola.component';
import { JuegoComponent } from './componentes/juego/juego.component';
import { BlogComponent } from './componentes/blog/blog.component';

import { NewplatformComponent } from './newplatform/newplatform.component';
import { NewgameComponent } from './newgame/newgame.component';

const APP_ROUTES: Routes = [

  // Se inicializan todas las rutas que vamos a utilizar.
  { path: 'principal', component: PrincipalComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'consolas', component: ConsolasComponent },

  { path: 'consolas/new', component: NewplatformComponent },
  { path: 'juegos/new', component: NewgameComponent },

  { path: 'infoconsola/:id', component: InfoconsolaComponent },
  { path: 'juego/:idjuego', component: JuegoComponent },
  { path: 'juegos/:idconsola', component: JuegosconsolaComponent },
  { path: 'consolas/:search', component: ConsolasComponent },
  { path: 'juegos/like/:search', component: JuegosconsolaComponent },
  { path: 'blogs', component: BlogComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'principal' }

];

// Se tiene que importar APP_ROUTING en el archivo app.module.ts como un import,
// y dentro del arreglo de imports[]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
