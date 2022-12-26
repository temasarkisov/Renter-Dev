import { Context, Middleware } from '@nuxt/types';

const AuthMiddleware: Middleware = async (context: Context) => {
    const authToken = sessionStorage.getItem('authToken');
    if (authToken) context.store.commit('user/SET_TOKEN', authToken);

    const authName = sessionStorage.getItem('authName');
    if (authName) context.store.commit('user/SET_NAME', authName);

    /**
     * @name authUser
     * @type string
     * @description Статус авторизации пользователя
     */
    const authUser = context.store.state.user.token;
    /**
     * @name pageName
     * @type string
     * @description Название текущей страницы
     */
    const pageName: string = String(context.route.name);
    /**
     * @name guestPages
     * @type array
     * @description Список гостевых страниц
     */
    const guestPages: string[] = ['login', 'register'];


    if (authUser) {
        if (guestPages.indexOf(pageName) > -1) {
            context.redirect({ name: 'index' });
        }
    } else if (guestPages.indexOf(pageName) === -1) {
        context.redirect({ name: 'login' });
    }
}

export default AuthMiddleware;