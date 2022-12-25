import { Context, Middleware } from '@nuxt/types';

const AuthMiddleware: Middleware = async (context: Context) => {
    const authUser = context.$auth.user;
    const pageName: string = String(context.route.name);
    const guestPages: string[] = ['login', 'register', 'index', 'list'];

    if (!authUser && (guestPages.indexOf(pageName) === -1)) {
        context.redirect({ name: 'login' });
    }
}

export default AuthMiddleware;