const{test,expect}=require('@playwright/test')
const { request } = require('http')

var userId;

test('Get Requets', async({request})=>{

    const response=await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect (response.status()).toBe(200)
})

test('Post Request', async({request})=>{

    const response = await request.post('https://reqres.in/api/users',
        {
            data:
            {
                "name":"GuitarAnd",
                "job":"GM"
            },
            headers:
            {
                "Accept":"Application/json"
            }
        }
    )
    var userId=await response.json()
    await expect(response.status()).toBe(201)

})

test('Put Request', async({request})=>{

    const response = await request.put('https://reqres.in/api/users/+userId',
        {
            data:
            {
                "name":"GuitarPiano",
                "job":"GM"
            },
            headers:
            {
                "Accept":"Application/json"
            }
        }
    )
    console.log(await response.json())
    await expect(response.status()).toBe(200)
})

test('Delete',async({request})=>{

    const response= await request.delete('https://reqres.in/api/users/+userId')
    await expect(response.status()).toBe(204)
})