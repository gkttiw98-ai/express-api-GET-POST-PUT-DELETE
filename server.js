import app from "./app.js";
import "./config/db.js"; // Initialize database connection






app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});