import { Location } from 'vue-router/types/router';

interface typeFormElement {
    type: 'text' | 'password' | 'email' | 'number' | 'url' | 'date' | 'datetime-local' | 'month' | 'week' | 'time' | 'search' | 'tel' | 'checkbox' | 'radio' | 'select' | 'select-multiple';
    value: any;
    placeholder: string;
    validate: boolean | null;
}

interface submitTypes {
    type: 'submit' | 'button';
    text: string;
}

interface routerTypes {
    text: string;
    to: Location;
}

interface loginType {
    login: typeFormElement;
    password: typeFormElement;
    submit: submitTypes;
    route: routerTypes;
}

interface registerType {
    login: typeFormElement;
    password: typeFormElement;
    password2: typeFormElement;
    submit: submitTypes;
    route: routerTypes;
}

export {
    loginType,
    submitTypes,
    typeFormElement,
    registerType
}