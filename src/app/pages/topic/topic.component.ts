import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import data from '../../data';

@Component({
    selector: 'app-topic',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './topic.component.html',
    styleUrl: './topic.component.css'
})
export class TopicComponent implements OnInit {
    currentTopicArray: any = [];
    currentTopicName: string | null = "";
    dataContent: any = [];
    topicCuriosities: {}[] = [];
    topicHealth: {}[] = [];
    topicNutrition: {}[] = [];
    topicTraining: {}[] = [];

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        data.forEach(article => {
            if (article.topic === "curiosities") {
                this.topicCuriosities.push(article)
            }
            else if (article.topic === "health") {
                this.topicHealth.push(article)
            }
            else if (article.topic === "nutrition") {
                this.topicNutrition.push(article)
            }
            else if (article.topic === "training") {
                this.topicTraining.push(article)
            }
        })
        this.dataContent.push(
            this.topicCuriosities,
            this.topicHealth,
            this.topicNutrition,
            this.topicTraining
        );

        this.route.paramMap.subscribe(value => {
            this.currentTopicName = value.get("topic");
        })
        this.setValuesToComponent(this.currentTopicName);
    }

    setValuesToComponent(topic: string | null) {
        const result = this.dataContent.filter((topicArray: any) =>
            topicArray[0].topic === topic
        )[0];
        this.currentTopicArray = result;
    }

    formatDate(date: Date): string {
        const options: {} = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
    }
}