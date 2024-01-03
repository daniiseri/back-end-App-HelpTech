import { ExpressContext } from 'apollo-server-express'

export interface MyContext {
    req: ExpressContext['req'];
    res: ExpressContext['res'];
    userId: number
    auth: string
}