import { Routes } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { HomeComponent } from './pages/home/home.component';
import { TopicComponent } from './pages/topic/topic.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: ":topic",
        component: TopicComponent
    },
    {
        path: ":topic/:article",
        component: ArticleComponent
    }
];