<script lang="ts">
// @ts-nocheck
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Validates extends Vue {
  validateForm(blur = false, payload: any, type: string) {
    if (blur) {
      Object.entries(this.form).forEach(([key, item]) => {
        if (typeof payload === 'string' && (key === payload)) {
          item.validate = true;
        } else if (typeof payload === 'object' && (typeof payload.item === 'string' && typeof payload.child === 'string') && (key === payload.item && item[payload.child])) {
          item[payload.child].validate = true;
        }
      });
    } else {
      switch (type) {
        case 'login': {
          this.form.login.validate = Boolean(/^([a-z0-9-!#$%&'*+/=?^_`]+\.)*[a-z0-9-!#$%&'*+/=?^_`]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,}$/i.test(String(this.form.login.value)));
          this.form.password.validate = Boolean(this.form.password.value && this.form.password.value.length >= 6);
          break;
        }
        case 'register': {
          this.form.login.validate = Boolean(/^([a-z0-9-!#$%&'*+/=?^_`]+\.)*[a-z0-9-!#$%&'*+/=?^_`]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,}$/i.test(String(this.form.login.value)));
          this.form.password.validate = Boolean(this.form.password.value && this.form.password.value.length >= 6);
          this.form.password2.validate = Boolean(this.form.password2.value && this.form.password2.value.length >= 6);
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

      this.submitForm(type);
    }
  }

  isValidForm(type) {
    switch (type) {
      case 'login': {
        return Boolean(this.form.login.validate && this.form.password.validate);
      }
      case 'register': {
        return Boolean(this.form.login.validate && this.form.password.validate && this.form.password2.validate);
      }
      case 'index': {
        return Boolean(this.form.name.validate && this.form.neighbourhood.validate && this.form.price.min.validate && this.form.price.max.validate && this.form.date.start.validate && this.form.date.finish.validate);
      }
      default: return false;
    }
  }
}
</script>