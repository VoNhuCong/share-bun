import { CommonResponse } from "../classes/CommonResponse"
import Blog from "../database/models/Blog";
import User from "../database/models/User";
import url from 'node:url';


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

interface UserIF {
    id?: string,
    username?: string,
    email?: string
}

const GetUser = async (req: Request) => {

    let queries = url.parse(req.url, true).query

    let userQueries: UserIF = {}
    if (queries.email !== undefined) userQueries.email = String(queries.email)
    if (queries.userID !== undefined) userQueries.id = String(queries.userID)
    if (queries.username !== undefined) userQueries.username = String(queries.username)

    console.log(userQueries)


    // let users = await User.findAll({
    //     where: Object(userQueries),
    //     include: Blog
    // })

    let users = await Blog.findAll({
        include: User
    })

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