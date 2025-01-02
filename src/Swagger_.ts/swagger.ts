import swaggerJsdoc from "swagger-jsdoc";
const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'API Documentation',
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
    apis: ['./src/router/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
console.log('Swagger Docs:', swaggerSpec);