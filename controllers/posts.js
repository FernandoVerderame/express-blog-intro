const { readJSON } = require("../utils");

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
                res.json(posts);
            }
        })
    }
}