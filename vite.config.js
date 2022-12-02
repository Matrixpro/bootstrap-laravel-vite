import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
const path = require('path');

export default defineConfig({
    resolve: {
        alias: {
            '~bootstrap': path.resolve('node_modules/bootstrap'),
        }
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
