import { Context, Middleware } from '@nuxt/types';

const AuthMiddleware: Middleware = async (context: Context) => {
    const authUser = context.$auth.user;
    const pageName: string = String(context.route.name);
    const guestPages: string[] = ['login', 'register'];

    if (authUser) {
        context.redirect({ name: 'home' });
    } else if (guestPages.indexOf(pageName) === -1) {
       context.redirect({ name: 'login' });
    }
}

export default AuthMiddleware;