import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import data from '../../data';

@Component({
    selector: 'app-article',
    standalone: true,
    imports: [],
    templateUrl: './article.component.html',
    styleUrl: './article.component.css'
})
export class ArticleComponent {
    contentTitle: string = ""
    contentDescription: string = ""
    articleTopic: string | null = ""
    private id: string | null = ""

    constructor(private route:ActivatedRoute) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(value => {
            this.id = value.get("id")
            this.articleTopic = value.get("topic");
        })
        this.setValuesToComponent(this.id, this.articleTopic);
    }

    setValuesToComponent(id: string | null, articleTopic: string | null) {
        const result = data.filter(article =>
            article.id() === id &&
            article.topic === articleTopic
        )[0];

        this.contentTitle = result.title
        this.contentDescription = result.descriptionBrief
        this.articleTopic = result.topic
    }
}