const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');

const app = new Koa();
const router = new KoaRouter();

// JSON prettier Middleware
app.use(json());

// Simple Middleware Example 
// app.use(async ctx => {
//   ctx.body = {'message':'hello koa'}
// })

router.get("/hakkimizda", ctx => (ctx.body = "About Page"));
router.get("/", ctx => (ctx.body = "Home Page"));
router.get("/iletisim", ctx => (ctx.body = "Contact Page"));


// Router Middleware
app.use(router.routes()).use(router.allowedMethods());

const PORT = 3000

app.listen(PORT, ()=>{
  console.log("Server has been created")
})