import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MediaMatcherService {
    matchMedia(query: string): MediaQueryList {
        return window.matchMedia(query);
    }
}