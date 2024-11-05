import app from './app.js';

const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not set

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
