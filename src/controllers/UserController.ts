import { CommonResponse } from "../classes/CommonResponse"
import User from "../database/models/User";


const CreateUser = async (req: Request) => {
    const data = await req.json();
    console.log(data)

    let user = {
        username: data.username,
        email: data.email
    }

    let result = await User.create(user)

    return new CommonResponse(true, result)
}

const GetUser = async (req: Request) => {

    let users = await User.findAll()

    return new CommonResponse(true, users)
}

const UpdateUser = async (req: Request) => {
    const data = await req.json();
    let userID = data.userId
    let newEmail = data.email
    let result = await User.update({
        email: newEmail
    }, { where: { id: userID } })

    return new CommonResponse(true, result)
}

const DeleteUser = async (req: Request) => {


    const data = await req.json();
    let userId = data.userId

    let result = await User.destroy({
        where: { id: userId }
    })
    console.log("ket qua", result)
    return new CommonResponse(true, {})
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