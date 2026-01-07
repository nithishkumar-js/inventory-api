import { app } from './app.js';
import { connectDB } from './config/db.js';

connectDB();
app.listen(5000, () => console.log('Server running in port 5000 http://localhost:5000'));
