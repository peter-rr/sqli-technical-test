import { test, expect, request } from '@playwright/test'
import { getPetsByStatus, createUser, getUser } from '../utils/api'
import { testUser } from '../utils/user'
import { PetManager } from '../utils/PetManager'

test.describe('Tests for API automation', () => {
    
    test('create user and retrieve its data by API call', async ({request}) => {
        await createUser(request, testUser)

        const userData = await getUser(request, testUser.username)
        console.log(userData)        
    })

    test('list the name of the pets that have been sold', async ({request}) => {
        const petsList = await getPetsByStatus(request, "sold")
        console.log("Sold pets:", petsList)
        expect(petsList.length).toBeGreaterThan(0)
    })

    test('identify how many pets share the same name', async ({request}) => {
        const petsList = await getPetsByStatus(request, "available")
        console.log("Available pets:", petsList)

        const petManager = new PetManager(petsList)
        const petNameCounter = petManager.countPetNames()
        console.log("Pets sharing the same name:", JSON.stringify(petNameCounter, null, 2))
    })
})