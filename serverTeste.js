const Koa = require('koa')
const Router = require('koa-router')

const api = new Router()

// Global var
let number = 5

api.get('/read', ctx => {
  ctx.body = number
  ctx.status = 200
})

api.put('/set', ctx => {
  const { n } = ctx.query
  number = n
  ctx.status = 200
})

const app = new Koa()
app.use(api.routes())
app.listen(3000, 'localhost', () => {
  console.log('Server listening at localhost:3000')
})
