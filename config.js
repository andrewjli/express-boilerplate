var value = ["Hello", "World"];

module.exports = function() {
    switch (process.env.NODE_ENV) {
        case 'production':
            return {
                key: value,
                db: {
                    host: 'production.com',
                    user: '',
                    password: '',
                    port: '3306',
                    database: 'prod'
                }
            };
        default:
            return {
                key: value,
                db: {
                    host: 'localhost',
                    user: 'root',
                    password: '',
                    port: '3306',
                    database: 'test'
                }
            };
    }
}