import { test, expect, request } from '@playwright/test'
import { getPetsByStatus } from '../utils/api'

test.describe('Tests for API automation', () => {
    
    // -> TODO:
    // Parametrizar datos de usuario
    // fetch() en lugar de get()?
    test('create user and retrieve its data by API call', async ({request}) => {
        const createUserResponse = await request.post('https://petstore.swagger.io/v2/user', {
            data: {
                "id": 0,
                "username": "jamesbrown",
                "firstName": "James",
                "lastName": "Brown",
                "email": "jbrown@test.com",
                "password": "Pass123",
                "phone": "777 12 34 56",
                "userStatus": 0
            }
        })
        expect(createUserResponse.status()).toEqual(200)

        const getUserResponse = await request.get('https://petstore.swagger.io/v2/user/jamesbrown')
        expect(getUserResponse.status()).toEqual(200)
        const getUserResponseBody = await getUserResponse.json()
        console.log(getUserResponseBody)
    })

    test('list the name of the pets that have been sold', async ({request}) => {
        const petsList = await getPetsByStatus(request, "sold")
        console.log(petsList)
        expect(petsList.length).toBeGreaterThan(0)
    })

    test('identify how many pets share the same name', async ({request}) => {
        
    })




})