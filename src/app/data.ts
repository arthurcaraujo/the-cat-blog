export default [
    {
        date: new Date(),
        descriptionBrief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
        imgDescription: "Sick cat",
        title: "How to tell if your cat is sick",
        topic: "health"
    },
    {
        date: new Date(new Date().setDate(new Date().getDate() - 2)),
        descriptionBrief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
        imgDescription: "Sick cat",
        title: "How to tell if your cat is sick 2",
        topic: "health"
    },
    {
        date: new Date(new Date().setDate(new Date().getDate() - 4)),
        descriptionBrief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        descriptionDetailed: ["Detailed 2.1", "More detailed 2.1"],
        id: function() {
            let text = "";
            for (let char of this.title) {
                if (char === " ") text += "-"
                else text += char
            }
            return text.toLowerCase();
        },
        img: "./assets/sick-cat.jpg",
        imgDescription: "Sick cat",
        title: "How to tell if your cat is sick 2.1",
        topic: "health"
    },
    {
        // date: new Date().toDateString(),
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
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
        imgDescription: "Sick cat",
        title: "How to tell if your cat is sick 3",
        topic: "wellness"
    },
    {
        date: new Date(new Date().setDate(new Date().getDate() - 3)),
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
        imgDescription: "Sick cat",
        title: "How to tell if your cat is sick 4",
        topic: "wellness"
    }
]