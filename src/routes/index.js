
const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me');

function routes(app){

    app.use('/news', newRouter);
    
    app.use('/courses', courseRouter);

    app.use('/me', meRouter)

    app.use('/', siteRouter);

    
}

module.exports = routes;