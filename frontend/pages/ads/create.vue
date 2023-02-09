<template>
  <div class="ads__create">
    <form class="ads__create__form" @submit.prevent="submitForm">
      <div class="ads__create__form__group">
        <div class="ads__create__form__label">Name:</div>
        <input class="renter__input ads__create__form__input" type="text" placeholder="Enter name" autocomplete="" />
      </div>
      <div class="ads__create__form__group">
        <div class="ads__create__form__label">Type:</div>
        <input class="renter__input ads__create__form__input" type="text" placeholder="Enter type" autocomplete="" />
      </div>
      <div class="ads__create__form__group">
        <div class="ads__create__form__label">Available dates range:</div>
        <div class="ads__create__form__dates">
          <datepicker class="renter__date-picker" :language="ru" :inline="false" format="dd/MM/yy" placeholder="Select date start" />
          <datepicker class="renter__date-picker" :language="ru" :inline="false" format="dd/MM/yy" placeholder="Select date end" />
        </div>
      </div>
      <div class="ads__create__form__group">
        <div class="ads__create__form__label">Neighbourhood:</div>
        <input class="renter__input ads__create__form__input" type="text" placeholder="Enter neighbourhood" autocomplete="" />
      </div>
      <div class="ads__create__form__group">
        <div class="ads__create__form__label">Price:</div>
        <input class="renter__input ads__create__form__input" type="text" placeholder="Enter price" autocomplete="" />
      </div>
      <div class="ads__create__form__group">
        <div class="ads__create__form__label">Description:</div>
        <textarea class="renter__textarea ads__create__form__input" type="text" placeholder="Enter description" autocomplete="" />
      </div>
      <div class="ads__create__form__group ads__create__form__group_images">
        <div class="ads__create__form__label">Images:</div>
        <div class="ads__create__form__image-chooser">
          <vue-core-image-upload
              class="renter__button" :crop="false" @imagechanged="uploadFile" text="Add photo" :max-file-size="5242880"
           />
        </div>
      </div>
      <div v-if="listImages.length > 0" class="ads__create__form__images">
        <img v-for="(src, index) in listImages" :key="`form-image-${index}`" :src="src" class="ads__create__form__image" />
      </div>
      <button type="submit" class="renter__button ads__create__form__group_submit">
        Create
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue
} from 'nuxt-property-decorator';
import Datepicker from 'vuejs-datepicker';
import VueCoreImageUpload  from 'vue-core-image-upload';
import ru from 'vuejs-datepicker/dist/locale/translations/ru';

@Component({
  data: () => ({ ru }),
  components: {
    Datepicker,
    'vue-core-image-upload': VueCoreImageUpload
  }
})
export default class AdsCreate extends Vue {
  listImages: string[] = []

  uploadFile(file) {
    const reader = new FileReader();
    reader.onload = e => this.listImages.push(e.target.result);
    reader.readAsDataURL(file);
  }

  submitForm() {
    console.log('submitForm()');
  }
}
</script>

<style lang="scss">
.ads {
  &__create {
    &__form {
      margin-top: 62px;

      &__images {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 20px;
      }

      &__image {
        width: 200px;
        height: 200px;
        object-fit: cover;
        background: #FFFFFF;
        border-radius: 15px;
        display: block;
      }
      
      &__group {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        &:not(&_submit), &:not(&_images) {
          margin-bottom: 24px;
        }
        &_submit {
          margin-left: auto;
        }
      }

      &__label {
        min-width: 190px;
        margin-right: 12px;
        font-weight: 900;
        font-size: 15px;
        line-height: 18px;
        font-family: 'ALSHauss-BlackExpanded', sans-serif;
      }

      &__dates {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 500px;

        .renter__date-picker {
          &:last-child {
            margin-left: auto;
          }
        }
      }
    }
  }
}
</style>