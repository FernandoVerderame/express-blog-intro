const { readJSON, writeJSON } = require("../utils");

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
                            <img width="300" height="200" src="/${image}" alt="${title}"/>
                            <p>${description}</p>
                            <ul>
                    `;
                    tags.forEach(t => html += `<li>${t}</li>`);
                    html += `
                            </ul>
                        </div>
                        `
                });
                html += '</main>';
                res.send(html);
            },
            json: () => {
                res.json(posts);
            }
        })
    },
    post: (req, res) => {
        const posts = readJSON('posts');
        writeJSON('posts', [...posts, req.body]);
        res.send('Post effettuato correttamente!')
    }
}