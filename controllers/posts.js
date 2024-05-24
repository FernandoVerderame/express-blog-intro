const posts = [
    {
        title: "Viaggio in Italia",
        description: "Un resoconto del mio viaggio attraverso le bellissime città italiane.",
        image: "viaggio_in_italia.jpg",
        tags: ["viaggio", "Italia", "turismo", "cultura"]
    },
    {
        title: "Ricetta della Torta di Mele",
        description: "Una deliziosa ricetta per preparare una torta di mele fatta in casa.",
        image: "torta_di_mele.jpg",
        tags: ["cucina", "dolci", "ricetta", "mele"]
    },
    {
        title: "Guida all'Escursionismo",
        description: "Consigli e suggerimenti per una perfetta escursione in montagna.",
        image: "escursionismo.jpg",
        tags: ["sport", "natura", "escursionismo", "avventura"]
    },
    {
        title: "Lezioni di Programmazione JavaScript",
        description: "Introduzione e guida avanzata alla programmazione in JavaScript.",
        image: "programmazione_js.jpg",
        tags: ["programmazione", "JavaScript", "coding", "tutorial"]
    },
    {
        title: "Arte Contemporanea",
        description: "Una panoramica sulle tendenze e gli artisti dell'arte contemporanea.",
        image: "arte_contemporanea.jpg",
        tags: ["arte", "contemporanea", "cultura", "mostre"]
    }
];

module.exports = {
    get: (req, res) => {
        const posts = readJSON('posts');
        res.format({
            html: () => {
                let html = '<main>';
                posts.forEach(({ title, description, image, tags }) => {
                    html += `
                        <div>
                            <h2>${title}</h2>
                            <img width="100" height="100" src="/${image}"/>
                            <p>${description}</p>
                            <ul>
                    `;
                    tags.forEach(i => html += `<li>${i}</li>`);
                    html += `
                            </ul>
                        </div>
                        `
                });
                html += '</main>';
                res.send(html);
            },
            json: () => {
                res.json(menu);
            }
        })
    }
}