import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const ENDPOINT_URL = 'http://localhost:8585/api';

@Injectable()
export class ConsolasService {

    constructor(public httpClient: HttpClient) {
        console.log('ConsolasService Creado...');
    }

    obtieneConsolas(search?: string): Observable<Consola[]> {
        if (!search) {
            return this.httpClient.get<Consola[]>(`${ENDPOINT_URL}/platform`);
        } else {
            return this.httpClient.get<Consola[]>(`${ENDPOINT_URL}/platform/like/${search}`);
        }
    }

    obtieneConsola(id: number): Observable<Consola> {
        return this.httpClient.get<Consola>(`${ENDPOINT_URL}/platform/${id}`);
    }

    obtieneJuegos(consola: number): Observable<Juego[]> {
        return this.httpClient.get<Juego[]>(`${ENDPOINT_URL}/platform/${consola}/games`);
    }

    obtieneJuegosLike(search: string): Observable<Juego[]> {
        return this.httpClient.get<Juego[]>(`${ENDPOINT_URL}/game/like/${search}`);
    }

    obtieneJuego(juego: number): Observable<Juego> {
        return this.httpClient.get<Juego>(`${ENDPOINT_URL}/game/${juego}`);
    }

    obtienePosts(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(`${ENDPOINT_URL}/posts/`);
    }

    escribeConsola(consola: Consola): Observable<any> {
        return this.httpClient.post<any>(`${ENDPOINT_URL}/platform`, consola);
    }

    escribeJuego(juego: Juego): Observable<any> {
        return this.httpClient.post<any>(`${ENDPOINT_URL}/game`, juego);
    }

    escribePost(post: Post): Observable<any> {
        return this.httpClient.post<any>(`${ENDPOINT_URL}/game`, post);
    }

}

export interface Post {
    author: string;
    date: Date;
    content: string;
}

export interface Juego {
    id: string;
    name: string;
    developer: string;
    cover: string;
    images: string[];
    links: string[];
    date: Date;
}

export interface Consola {
    id: string;
    cover: string;
    image: string;
    techSpecs: string;
    games_ids: string[];
}