import { APIRequestContext, expect, request } from '@playwright/test'


export async function createUser(request: APIRequestContext, user: any) {
    const response = await request.post('https://petstore.swagger.io/v2/user', { data: user })    
    expect(response.status()).toEqual(200)
  
    return response;
}


export async function getUser(request: APIRequestContext, username: string) {
    const response = await request.get(`https://petstore.swagger.io/v2/user/${username}`)
    expect(response.status()).toEqual(200)

    return response.json();
}


export async function getPetsByStatus(request: APIRequestContext, petStatus: string): Promise<{ id: number, name: string }[]> {
    const getPetsResponse = await request.get('https://petstore.swagger.io/v2/pet/findByStatus', {
        params: { "status": petStatus }
    })
    expect(getPetsResponse.status()).toEqual(200)

    const getPetsResponseBody = await getPetsResponse.json()

    return getPetsResponseBody
        .filter((pet: any) => pet.id && pet.name)
        .map((pet: any) => ({ id: pet.id, name: pet.name }))
}

