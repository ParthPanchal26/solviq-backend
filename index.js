import { app } from './app.js';
import { connectDB } from './config/database.config.js';

connectDB();

const PORT = process.env.PORT;


app.listen(PORT, (req, res) => {
    console.log(`Server running on http://localhost:${PORT}`);
});
