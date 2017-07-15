import express from 'express';

const app = expreas();

app.get('/*', (req, res) => {
    res.send('Will make MS!');

});

app.listen(3000, () => console.log('Server running @ <%)>>< 3000'));

