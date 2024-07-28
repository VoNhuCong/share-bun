

export class CommonResponse {
    isOK: boolean | null = null
    data: object | null = null

    constructor(isOK: boolean | null, data: object | null) {
        this.isOK = isOK
        this.data = data
    }
}