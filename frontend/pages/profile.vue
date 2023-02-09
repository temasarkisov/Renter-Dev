<template>
  <div class="profile">

    <div class="profile__info">
      <div class="profile__info__row">
        <b class="profile__info__label">Name: </b><span v-html="fullName" />
      </div>
      <div class="profile__info__row">
        <b class="profile__info__label">Status: </b><span v-html="userStatus" />
      </div>
    </div>

    <div class="profile__listings">
      <div class="profile__listings__header">
        <div class="profile__listings__header__title">Your listings:</div>
        <nuxt-link :to="{ name: 'ads-create' }" class="profile__button profile__listings__header__button">Create new one</nuxt-link>
      </div>
      <div class="profile__listings__list__body">
        <div class="profile__listings__list__row">
          <ul class="profile__listings__list">
            <li class="profile__listings__item profile__listings__item_header">
              Rooftop terrace room, ensuite bathroom
            </li>
            <li class="profile__listings__item">Entire home/apt</li>
            <li class="profile__listings__item">Hispanoamérica</li>
            <li class="profile__listings__item">50$</li>
          </ul>
          <div class="profile__listings__list__extra">
            <button class="profile__button profile__listings__body__button">
              Edit
            </button>
          </div>
        </div>
        <div class="profile__listings__list__row">
          <ul class="profile__listings__list">
            <li class="profile__listings__item profile__listings__item_header">
              Rooftop terrace room, ensuite bathroom
            </li>
            <li class="profile__listings__item">Entire home/apt</li>
            <li class="profile__listings__item">Hispanoamérica</li>
            <li class="profile__listings__item">50$</li>
          </ul>
          <div class="profile__listings__list__extra">
            <button class="profile__button profile__listings__body__button">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {
  Component, Vue
} from 'nuxt-property-decorator';
import {
  Getter
} from 'vuex-class';

@Component
export default class Profile extends Vue {
  @Getter('user/name') username: any

  fullName: string = '';
  userStatus: string = "Yo, I'm super friendly!"

  mounted() {
    this.fullName = String(this.username);
  }
}
</script>

<style lang="scss">
.profile {
  &__button {
    border: 1.5px solid #000000;
    border-radius: 15px;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #000;
    padding: 11px 14px;
    min-width: 300px;
    text-align: center;
    cursor: pointer;
    display: block;
  }
  &__info {
    margin-top: 76px;
    &__label {
      font-family: 'ALSHauss-BlackExpanded', sans-serif;
      font-weight: 900;
      font-size: 15px;
      line-height: 18px;
    }
  }
  &__listings {
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 80px 0 73px;

      &__title {
        font-weight: 900;
        font-size: 18px;
        line-height: 22px;
        font-family: 'ALSHauss-BlackExpanded', sans-serif;
      }
    }

    &__body {
    }
    &__list {
      margin-left: 20px;

      &__row {
        border-top: 0.5px solid #000000;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:not(&:last-child) {
          margin-bottom: 40px;
        }
      }
    }
    &__item {
      font-style: normal;
      color: #000000;
      font-size: 15px;
      font-weight: 400;
      line-height: 20px;
      min-height: 38px;
      border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      justify-content: flex-start;

      &_header {
        font-weight: 900;
        line-height: 18px;
        font-family: 'ALSHauss-BlackExpanded', sans-serif;
      }
    }

  }
}
</style>