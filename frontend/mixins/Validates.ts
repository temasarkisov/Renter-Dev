import { Component } from 'nuxt-property-decorator';
import FormWatcher from './FormWatcher';

@Component
export default class extends FormWatcher {
    form: any = {};

    /**
     * @function
     * @name setValidate
     * @param key
     * @param item
     * @param payload
     * @description Сброс валидации для элемента в форме
     */
    setValidate(key: string, item: any, payload: string | { child: number, item: string }) {
        if (typeof payload === 'string' && (key === payload)) {
            item.validate = true;
        } else if (typeof payload === 'object' && (key === payload.item && item[payload.child])) {
            item[payload.child].validate = true;
        }
    }

    /**
     * @function
     * @name validateForm
     * @param blur
     * @param payload
     * @param type
     * @description Проверяем форму на заполненность
     */
    validateForm(blur = false, payload: any, type: string) {
        if (blur) {
            Object.entries(this.form).forEach(([key, item]) => this.setValidate(key, item, payload));
        } else {
            switch (type) {
                case 'login': {
                    // this.form.login.validate = Boolean(/^([a-z0-9-!#$%&'*+/=?^_`]+\.)*[a-z0-9-!#$%&'*+/=?^_`]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,}$/i.test(String(this.form.login.value)));
                    this.form.login.validate = Boolean(this.form.login.value && this.form.login.value.length >= 4);
                    this.form.password.validate = Boolean(this.form.password.value && this.form.password.value.length >= 4);
                    break;
                }
                case 'register': {
                    // this.form.login.validate = Boolean(/^([a-z0-9-!#$%&'*+/=?^_`]+\.)*[a-z0-9-!#$%&'*+/=?^_`]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,}$/i.test(String(this.form.login.value)));
                    this.form.login.validate = Boolean(this.form.login.value && this.form.login.value.length >= 4);
                    this.form.password.validate = Boolean(this.form.password.value && this.form.password.value.length >= 4);
                    this.form.password2.validate = Boolean(this.form.password2.value && this.form.password2.value.length >= 4);
                    break;
                }
                case 'index': {
                    const minValue: number = parseInt(this.form.price.min.value);
                    const maxValue: number = parseInt(this.form.price.max.value);

                    this.form.name.validate = Boolean(this.form.name.value && this.form.name.value.length >= 3);
                    this.form.neighbourhood.validate = Boolean(this.form.neighbourhood.value && this.form.neighbourhood.value.length >= 3);

                    this.form.price.min.validate = Boolean(Number.isInteger(minValue) && (minValue > 0));
                    this.form.price.max.validate = Boolean(Number.isInteger(maxValue) && (maxValue > 0));

                    this.form.date.start.validate = (this.form.date.start.value);
                    this.form.date.finish.validate = (this.form.date.finish.value);
                    break;
                }
                default: break;
            }

            (this as any).submitForm(type);
        }
    }

    /**
     * @function
     * @name isValidForm
     * @param type
     * @return boolean
     * @description Возвращаем статус заполненности формы
     */
    isValidForm(type: string) {
        switch (type) {
            case 'login': {
                return Boolean(this.form.login.validate && this.form.password.validate);
            }
            case 'register': {
                return Boolean(this.form.login.validate && this.form.password.validate && this.form.password2.validate);
            }
            case 'index': {
                return true;
                // return Boolean(this.form.name.validate && this.form.neighbourhood.validate && this.form.price.min.validate && this.form.price.max.validate && this.form.date.start.validate && this.form.date.finish.validate);
            }
            default: return false;
        }
    }
}