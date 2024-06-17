/**
 * set NODE_ENV=production to change back to production
 * set NODE_ENV=development for development, debug
 */

const evironments = {
    development: {
        port: 3000,
    },
    production: {
        port: 80,
    }
};

const evironment = process.env.NODE_ENV || "development";
export default evironments[evironment];