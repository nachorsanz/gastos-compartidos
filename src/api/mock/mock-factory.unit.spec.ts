import { UserType } from "../../domain/user"
import { createMockUser } from "./mock-factory"

describe('Mock Factory',()=>{
    it('Get mock user',()=>{
        const user: UserType = createMockUser()
        expect(user).toEqual({
            id: '1',
            name: 'John Doe',
            email: 'johndoe@mail.com',
            group: ['1'],
        })
    })
})