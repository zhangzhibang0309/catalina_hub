const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const useRoutes = require("../router");
const errorHandler = require("./error-handle");

const app = new Koa();

app.useRoutes = useRoutes;

// 解析数据
app.use(bodyParser());
app.useRoutes();

// 监听错误
app.on("error", errorHandler);

module.exports = app;
