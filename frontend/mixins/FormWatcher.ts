import {
    Vue,
    Component,
    Watch,
} from 'nuxt-property-decorator';

import { loginType, searchType, registerType } from '../assets/types/forms';

@Component
export default class extends Vue {
    form: any = null;

    /**
     * @function
     * @name onFormChanged
     * @param form
     * @description Отслеживание изменений формы
     */
    @Watch('form',{ immediate: true, deep: true })
    onFormChanged(form: loginType & searchType & registerType) {
        this.storageForm(form.type, form);
    }

    mounted() {
        this.$nextTick(() => {
            this.getFromStorageForm();
        });
    }

    /**
     * @function
     * @name storageForm
     * @param type
     * @param form
     * @description Сохранение данных формы в sessionStorage
     */
    storageForm(type: string, form: loginType & searchType & registerType) {
        if (!process.client) return;

        const domainStorage = `${type}-form-data`;
        switch (type) {
            case 'login': {
                const login: string = form.login.value;
                const password: string = form.password.value;

                if (login || password) {
                    sessionStorage.setItem(domainStorage, JSON.stringify({ login, password }));
                }
                break;
            }
            case 'register': {
                const login: string = form.login.value;
                const password: string = form.password.value;
                const password2: string = form.password2.value;

                if (login || password || password2) {
                    sessionStorage.setItem(domainStorage, JSON.stringify({ login, password, password2 }));
                }
                break;
            }
            case 'index': {
                const name: string = form.name.value;
                const neighbourhood: string = form.neighbourhood.value;
                const minPrice: number = form.price.min.value;
                const maxPrice: number = form.price.max.value;
                const dateStart: string = form.date.start.value;
                const dateFinish: string = form.date.finish.value;

                if (name || neighbourhood || minPrice || maxPrice || dateStart || dateFinish) {
                    sessionStorage.setItem(domainStorage, JSON.stringify({
                        name, neighbourhood, minPrice, maxPrice, dateStart, dateFinish
                    }));
                }
                break;
            }
            default: break;
        }
    }

    /**
     * @function
     * @name getFromStorageForm
     * @description Получение данных формы из sessionStorage
     */
    getFromStorageForm() {
        const domainStorage = `${String(this.form.type)}-form-data`;
        let dataStorage: any = sessionStorage.getItem(domainStorage);
        if (dataStorage) {
            try {
                dataStorage = JSON.parse(dataStorage);

                switch (String(this.form.type)) {
                    case 'register': {
                        this.form.login.value = dataStorage.login;
                        this.form.password.value = dataStorage.password;
                        this.form.password2.value = dataStorage.password2;
                        break;
                    }
                    case 'login': {
                        this.form.login.value = dataStorage.login;
                        this.form.password.value = dataStorage.password;
                        break;
                    }
                    case 'index': {
                        this.form.name.value = dataStorage.name;
                        this.form.neighbourhood.value = dataStorage.neighbourhood;
                        this.form.price.min.value = dataStorage.minPrice;
                        this.form.price.max.value = dataStorage.maxPrice;
                        this.form.date.start.value = dataStorage.dateStart;
                        this.form.date.finish.value = dataStorage.dateFinish;
                        break;
                    }
                    default: break;
                }
            } catch(e) {
                console.log(e);
            }
        }
    }

    /**
     * @function
     * @name clearStorageForm
     * @description Удаление данных формы из sessionStorage
     */
    clearStorageForm() {
        const domainStorage = `${String(this.form.type)}-form-data`;
        sessionStorage.removeItem(domainStorage);
    }
}