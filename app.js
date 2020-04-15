const express = require('express');
const bodyParse = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

const app = express();

app.use(bodyParse.json());

app.use(
    '/graphql',
    graphqlHttp({
        schema: graphQlSchema,
        rootValue: graphQlResolvers,
        graphiql: true
}));

mongoose
    .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ukbk9.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
        {useNewUrlParser: true, useUnifiedTopology: true}
        )
    .then(() => {
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });

