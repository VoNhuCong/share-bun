import { UserController } from "./src/controllers/UserController";

import "./src/database/connection"

const server = Bun.serve({
    async fetch(req) {
        const path = new URL(req.url).pathname;

        let userResponse = await UserController(req)
        if (userResponse.isOK !== null) {
            return Response.json(userResponse);
        }

        switch (path) {
            case "/":
                return new Response("Welcome to Bun!");
            default:
                return new Response("Page not found", { status: 404 });
        }
    }
})

console.log(`Listening on ${server.url}`);
