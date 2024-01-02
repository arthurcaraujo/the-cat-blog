export default [
    {
        date: new Date().toDateString(),
        descriptionBrief: "Brief text",
        descriptionDetailed: ["Detailed", "More detailed"],
        id: function() {
            let text = "";
            for (let char of this.title) {
                if (char === " ") text += "-"
                else text += char
            }
            return text.toLowerCase();
        },
        img: "./assets/sick-cat.jpg",
        title: "How to tell if your cat is sick",
        topic: "health"
    },
    {
        date: new Date().toDateString(),
        descriptionBrief: "Brief text 2",
        descriptionDetailed: ["Detailed 2", "More detailed 2"],
        id: function() {
            let text = "";
            for (let char of this.title) {
                if (char === " ") text += "-"
                else text += char
            }
            return text.toLowerCase();
        },
        img: "./assets/sick-cat.jpg",
        title: "How to tell if your cat is sick 2",
        topic: "health"
    },
    {
        date: new Date().toDateString(),
        descriptionBrief: "Brief text 3",
        descriptionDetailed: ["Detailed 3", "More detailed 3"],
        id: function() {
            let text = "";
            for (let char of this.title) {
                if (char === " ") text += "-"
                else text += char
            }
            return text.toLowerCase();
        },
        img: "./assets/sick-cat.jpg",
        title: "How to tell if your cat is sick 3",
        topic: "wellness"
    },
    {
        date: new Date().toDateString(),
        descriptionBrief: "Brief text 4",
        descriptionDetailed: ["Detailed 4", "More detailed 4"],
        id: function() {
            let text = "";
            for (let char of this.title) {
                if (char === " ") text += "-"
                else text += char
            }
            return text.toLowerCase();
        },
        img: "./assets/sick-cat.jpg",
        title: "How to tell if your cat is sick 4",
        topic: "wellness"
    }
]