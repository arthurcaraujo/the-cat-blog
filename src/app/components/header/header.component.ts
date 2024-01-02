import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MediaMatcherService } from '../../media-matcher.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    expandNavbar: boolean = false;
    isDesktop: boolean = false;

    constructor(private mediaMatcher: MediaMatcherService) { }

    ngOnInit(): void {
        this.handleWindowResize();
    }

    @HostListener("window: resize")
    handleWindowResize() {
        const mediaQuery = this.mediaMatcher.matchMedia("(min-width: 576px)");
        this.isDesktop = mediaQuery.matches;
        mediaQuery.addEventListener("change", () => {
            this.isDesktop = mediaQuery.matches;
        });
    }

    setExpandNavbar = () => this.expandNavbar = !this.expandNavbar;
}