import {createServer} from "./server.ts"

const app = createServer()

await app.listen({port: 3000, host: '0.0.0.0'})

app.inject({
    method: 'POST',
    url: '/chat',
    body:{question:'Hello world'}
}).then((response) => {
    console.log('Response Status', response.statusCode)
    console.log('Response body', response.body)
})