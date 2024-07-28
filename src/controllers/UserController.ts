import { CommonResponse } from "../classes/CommonResponse"


const CreateUser = async (req: Request) => {
    const data = await req.json();
    console.log("Received JSON:", data);
    let res = {
        name: "Lap trinh bun"
    }
    return new CommonResponse(true, res)
}

const GetUser = async (req: Request) => {
    const data = await req.json();
    console.log("Received JSON:", data);
    return new CommonResponse(true, data)
}

const UpdateUser = async (req: Request) => {
    const data = await req.json();
    console.log("Received JSON:", data);
    return new CommonResponse(true, data)
}

const DeleteUser = async (req: Request) => {
    const data = await req.json();
    console.log("Received JSON:", data);
    return new CommonResponse(true, data)
}



export const UserController = async (req: Request) => {
    const path = new URL(req.url).pathname;

    let userRes = new CommonResponse(null, null)

    switch (path) {
        case "/create-user":
            userRes = await CreateUser(req)
            break
        case "/get-user":
            userRes = await GetUser(req)
            break
        case "/update-user":
            userRes = await UpdateUser(req)
            break
        case "/delete-user":
            userRes = await DeleteUser(req)
    }

    return userRes
}