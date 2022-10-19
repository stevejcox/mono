"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', 'dpg-cd7lso82i3mt3nljllu0-a.oregon-postgres.render.com'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'cms_j953'),
            user: env('DATABASE_USERNAME', 'cms_j953_user'),
            password: env('DATABASE_PASSWORD', '9ffQs7xUyyrq3PDMFFN20bmtVWZC6M4f'),
            ssl: env.bool('DATABASE_SSL', true),
        },
    },
});
