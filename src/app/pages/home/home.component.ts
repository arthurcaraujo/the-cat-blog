import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import data from '../../data';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'home',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    dataContent: any = [];
    topicCuriosities: {}[] = [];
    topicHealth: {}[] = [];
    topicNutrition: {}[] = [];
    topicTraining: {}[] = [];

    ngOnInit(): void {
        data.forEach(article => {
            if (article.topic === "curiosities" &&
                    this.topicCuriosities.length < 3
            ) {
                this.topicCuriosities.push(article)
            }
            else if (article.topic === "health" &&
                    this.topicHealth.length < 3
            ) {
                this.topicHealth.push(article)
            }
            else if (article.topic === "nutrition" &&
                    this.topicNutrition.length < 3
            ) {
                this.topicNutrition.push(article)
            }
            else if (article.topic === "training" &&
                    this.topicTraining.length < 3
            ) {
                this.topicTraining.push(article)
            }
        })
        this.dataContent.push(
            this.topicCuriosities,
            this.topicHealth,
            this.topicNutrition,
            this.topicTraining
        );
    }

    formatDate(date: Date): string {
        const options: {} = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
    }
}