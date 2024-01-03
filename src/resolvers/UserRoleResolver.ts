import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { UserRoleServices } from '../services/UserRoleServices.js'
import { NewUserRoleInput } from '../input/NewUserRoleInput.js'
import { MyContext } from '../context.js'
import { Role } from '../models/Role.js'

@Resolver()
export class UserRoleResolver {
    userRoleServices: UserRoleServices

    constructor() {
        this.userRoleServices = new UserRoleServices()
    }

    @Authorized("Admin", "user")
    @Query(() => [Role])
    async rolesByUser(@Ctx() context: MyContext) {
        const userId = context.userId

        const userRoles = await this.userRoleServices.getByUser(userId)

        const roles = userRoles.map(({ idrole, description }) => {
            return { id: idrole, description }
        })

        return roles
    }

    @Mutation(() => Number)
    async createUserRole(@Arg("newUserRoleInput") { iduser, idrole }: NewUserRoleInput) {
        const result = await this.userRoleServices.create(iduser, idrole)

        return result
    }

    @Mutation(() => Number)
    async deleteUserRole(@Arg("IdUserRole") idUserRole: number) {
        const result = await this.userRoleServices.delete(idUserRole)

        return result
    }
}