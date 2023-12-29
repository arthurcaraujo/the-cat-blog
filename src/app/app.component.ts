import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ArticleComponent } from './pages/article/article.component';
import { HomeComponent } from './pages/home/home.component';
import { TopicComponent } from './pages/topic/topic.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        ArticleComponent,
        CommonModule,
        HomeComponent,
        RouterOutlet,
        TopicComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'the-cat-blog';
}