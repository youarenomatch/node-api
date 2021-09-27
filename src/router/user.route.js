// const Router = require("koa-router");
// //prefix 相当于前缀
// const router = new Router({ prefix: "/users" });

// router.get("/", (ctx, next) => {
//   ctx.body = "hello users";
// });

// module.exports = router;

const Router = require("koa-router");

const { register, login } = require("../controller/user.controller");

const router = new Router({ prefix: "/users" });

// 注册接口
router.post("/register", register);

// 登录接口
router.post("/login", login);

module.exports = router;
