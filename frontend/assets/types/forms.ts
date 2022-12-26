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
    type: string;
}

interface registerType {
    login: typeFormElement;
    password: typeFormElement;
    password2: typeFormElement;
    submit: submitTypes;
    route: routerTypes;
}

interface searchType {
    name: typeFormElement;
    neighbourhood: typeFormElement;
    price: {
        min: typeFormElement;
        max: typeFormElement;
    }
    date: {
        start: typeFormElement;
        finish: typeFormElement;
    }
    submit: submitTypes;
    type: string;
}

export {
    loginType,
    submitTypes,
    typeFormElement,
    registerType,
    searchType
}