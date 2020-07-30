const Express = require("express");
const { ApolloServer, gql, UserInputError } = require("apollo-server-express");
const questions = require("./questions");

const typeDefs = gql`
type Query {
    questions: [Question!]!
}

type Mutation {
    grade(answers: [String]!): Results!
}

type Question {
    title: String
    image: String
    description: String
    response: Response!
}

type Response {
    type: ResponseType!
    choices: [String!]
    correct: String!
}

enum ResponseType {
    multipleChoice
    freeResponse
}

type Results {
    score: Int!
    correct: [Boolean!]!
    flag: String
}
`;

const app = new Express();

const resolvers = {
    Query: {
        questions: () => questions
    },
    Mutation: {
        grade: (_, {answers}) => {
            if (answers.length !== questions.length) {
                throw new UserInputError(`Answers array of length ${answers.length} does not match questions array of length ${questions.length}.`);
            }

            const correct = answers.map((answer, index) => answer === questions[index].response.correct);
            const score = correct.reduce((acc, val) => acc + (val ? 1 : 0), 0);
            if (score >= questions.length) {
                return {score, flag: process.env.APH2_FLAG || "This problem is misconfigured. Please contact CS Camp CTF staff."};
            } else {
                return {score};
            }
        }
    }
};

const server = new ApolloServer({typeDefs, resolvers, introspection: true, playground: true});
server.applyMiddleware({app});

app.use(Express.static("static"));

app.listen(process.env.APH2_PORT || process.env.PORT || 1337);
