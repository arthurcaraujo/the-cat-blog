import { Component, OnInit } from '@angular/core';
import data from '../../data';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'home',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
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
    }
}