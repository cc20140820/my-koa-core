const myCompose = require("./compose")

async function f1(ctx, next) {
  console.log("f1 start ->")
  await next()
  console.log("f1 end <-")
}

async function f2(ctx, next) {
  console.log("f2 start ->")
  await next()
  console.log("f2 end <-")
}

async function f3(ctx) {
  console.log("f3 service...")
}

const fn = myCompose([f1, f2, f3])
fn()
