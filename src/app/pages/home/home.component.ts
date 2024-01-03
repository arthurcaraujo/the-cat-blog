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
    topicHealth: any = [];
    topicWellness: any = [];

    ngOnInit(): void {
        data.forEach(article => {
            if (article.topic === "health") {
                this.topicHealth.push(article)
            }
            else if (article.topic === "wellness") {
                this.topicWellness.push(article)
            }
        })
        this.dataContent.push(this.topicHealth, this.topicWellness);
        console.log(this.dataContent);
    }

    formatDate(date: Date) {
        const options: {} = {year: "numeric", month: "long", day: 'numeric' };

        return date.toLocaleDateString("en-US", options)
    }
}