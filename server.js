const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 4200;

const distFolder = path.join(process.cwd(), 'browser');
const indexHtml = fs.existsSync(path.join(distFolder, 'index.html'))
    ? 'index.html'
    : 'index.csr.html';

app.use(express.static(distFolder));

app.get('*', (req, res) => {
    res.sendFile(path.join(distFolder, indexHtml));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
