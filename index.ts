import { UserController } from "./src/controllers/UserController";

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
            case "/abc":
                return Response.redirect("/source", 301);
            case "/source":
                return new Response(Bun.file(import.meta.path));
            case "/api":
                return Response.json({ some: "buns", for: "you" });
            case "/api/post":
                if (req.method === "POST") {
                    const data = await req.json();
                    console.log("Received JSON:", data);
                    return Response.json({ success: true, data });
                } else {
                    return new Response("Page not found", { status: 404 });
                }
            default:
                return new Response("Page not found", { status: 404 });
        }
    }
})

console.log(`Listening on ${server.url}`);
