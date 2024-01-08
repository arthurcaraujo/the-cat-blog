import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import data from '../../data';

@Component({
    selector: 'app-article',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './article.component.html',
    styleUrl: './article.component.css'
})
export class ArticleComponent {
    articleDate: Date = new Date();
    articleDescriptionBrief: string = "";
    articleDescriptionDetailed: string[] = [];
    private articleId: string | null = "";
    articleImg: string = "";
    articleImgDescription: string = "";
    articleTitle: string = "";
    articleTopic: string | null = "";

    constructor(private route:ActivatedRoute) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(value => {
            this.articleId = value.get("id");
            this.articleTopic = value.get("topic");
        })
        this.setValuesToComponent(this.articleId, this.articleTopic);
    }

    setValuesToComponent(id: string | null, topic: string | null) {
        const result = data.filter(article =>
            article.id() === id &&
            article.topic === topic
        )[0];

        this.articleDate = result.date;
        this.articleDescriptionBrief = result.descriptionBrief;
        this.articleDescriptionDetailed = result.descriptionDetailed;
        this.articleImg = result.img;
        this.articleImgDescription = result.imgDescription;
        this.articleTitle = result.title;
        this.articleTopic = result.topic.toUpperCase();
    }

    formatDate(date: Date): string {
        const options: {} = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
    }
}