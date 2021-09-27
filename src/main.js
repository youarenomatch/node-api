// const koa = require("koa");

const { APP_PORT } = require("./config/config.default");
const app = require("./app");
// const userRouter = require("./router/user.route");
// const app = new koa();

// app.use((ctx, next) => {
//   ctx.body = "nihao";
// });
// app.use(userRouter.routes());

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});
