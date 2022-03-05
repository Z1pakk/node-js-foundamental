const PORT = process.env.PORT || 5000;
const Application = require('./framework/application');
const userRouter = require('./src/user-router');
const jsonParser = require('./framework/parseJson');

const app = new Application();

app.use(jsonParser);
app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server has been started on PORT ${PORT}`));


