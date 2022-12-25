import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
   target: 'static',
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
    head: {
        title: 'Renter-dev',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
    },
    build: {
        cssSourceMap: false,
        extractCSS: false,
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
        filenames: {
            app: () => '[name]-[hash].js',
            chunk: () => '[name]-[hash].js',
            css: () => '[name]-[hash].css',
            img: () => 'images/[path][name].[ext]',
            font: () => 'fonts/[path][name].[ext]',
        }
    },
    buildModules: [
        '@nuxtjs/composition-api/module',
        '@nuxt/typescript-build',
        '@nuxtjs/style-resources',
        ['@nuxt/postcss8', {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            }
        }],
    ],
    css: [
        './assets/main.scss'
    ],
    tailwindcss: {
        exposeConfig: true,
    },
    styleResources: {
        scss: ['./assets/_variables.scss'],
    },
    // env: {},
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        'cookie-universal-nuxt',
    ],
    auth: {
        // @ts-ignore
        redirect: false,
        strategies: {
            local: {
                token: {
                    property: 'token',
                    type: 'Token',
                    name: 'Authorization',
                },
                endpoints: {
                    login: { url: '/api/auth/sign-in', method: 'post' },
                    logout: { url: '/api/auth/logout', method: 'post' },
                    user: { url: '/api/auth/user', method: 'get' }
                },
                user: {
                    property: 'user',
                },
            }
        },
    },
    router: {
        middleware: [
            'auth-redirect'
        ],
    }
}

export default config;