import app from "./app";

const PORT: string | number = process.env.PORT || 4800
const server = app.listen(PORT, () => console.log("[+] The dz-api is running on port " + PORT))

export default server;