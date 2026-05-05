import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API PSN",
            version: "1.0.0",
            description: "Documentação com Swagger"
        }
    },
    apis: ["./psnRoutes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;