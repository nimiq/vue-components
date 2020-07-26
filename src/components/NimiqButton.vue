<template>
  <a
    :href="link ? link : null"
    :class="[color, {
        'nq-button': !small,
        'big-label': !small,
        'nq-button-s': small && color === 'gray',
        'nq-button-pill': small && color != 'gray',
        'go-back': back,
        'has-arrow': arrow || back,
        small, inverse, }]"
    :target="(link && link.startsWith('http')) ? '_blank' : '_self'">

    <span>{{ $t(text) }}</span>
    <template v-if="arrow || back">
      <template v-if="small">
        <svg class="arrow desktop" fill="currentColor" width="11" height="9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9">
          <path d="M10.78,3.72,7.28.22A.75.75,0,0,0,6.22,1.28L8.44,3.5H.75A.75.75,0,0,0,.75,5H8.44L6.22,7.22a.75.75,0,0,0,0,1.06.75.75,0,0,0,1.06,0l3.5-3.5A.75.75,0,0,0,10.78,3.72Z"/>
        </svg>
        <svg class="arrow mobile" fill="currentColor" width="10" height="8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8">
          <path d="M9.8,3.2l-3-3C6.5-0.1,6,0,5.7,0.3c-0.3,0.3-0.3,0.7,0,1L7.4,3H0.8C0.3,3,0,3.3,0,3.8s0.3,0.8,0.8,0.8h6.7 L5.7,6.2C5.4,6.5,5.4,7,5.7,7.3c0.3,0.3,0.8,0.3,1.1,0l3-3C10.1,4,10.1,3.5,9.8,3.2z"/>
        </svg>
      </template>

      <template v-else>
        <ArrowRightSmallIcon class="arrow desktop"/>
        <svg class="arrow mobile" fill="currentColor" width="13" height="10" viewBox="0 0 13 10">
          <path d="M12.78,4.22l-4-4A.75.75,0,0,0,7.72,1.28L10.44,4H.75a.75.75,0,0,0,0,1.5h9.69L7.72,8.22a.75.75,0,0,0,0,1.06.75.75,0,0,0,1.06,0l4-4a.75.75,0,0,0,0-1.06Z"/>
        </svg>
      </template>
    </template>

  </a>
</template>

<script lang="ts">
import {Component, Mixins, Emit, Prop} from 'vue-property-decorator';
import { ArrowRightSmallIcon } from './Icons';
import I18nMixin from '../i18n/I18nMixin';

@Component({
    name: 'AccountList',
    components: {
        ArrowRightSmallIcon,
    },
})
export default class NimiqButton extends Mixins(I18nMixin) {
    @Prop(String) private text?: string;
    @Prop(String) private link?: string;
    @Prop({ type: String, default: 'light-blue' }) private color!: string;
    @Prop(Boolean) private arrow?: boolean;
    @Prop(Boolean) private small?: boolean;
    @Prop(Boolean) private inverse?: boolean;
    @Prop(Boolean) private back?: boolean;
}
</script>

<style scoped>

  a.has-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  a .arrow {
    margin-left: 8px;
    transition: transform .4s cubic-bezier(.25,0,0,1);
    fill: #fff;
  }

  a:hover .arrow {
    transform: translate3D(2px,0,0);
  }

  a.go-back {
    flex-direction: row-reverse;
  }

  a.go-back .arrow {
    margin-left: 0;
    margin-right: 8px;
    transform: rotate(180deg);
  }

  a.go-back:hover .arrow {
    transform: rotate(180deg) translate3D(2px,0,0);
  }

  .arrow.mobile {
      display: none;
  }

  @media (max-width: 850px) {
    .nq-button {
      padding: 0 24px;
      height: 50px;
    }

    .small .arrow {
      margin-left: 6px;
    }

    .small.go-back .arrow {
      margin-left: 0;
      margin-right: 6px;
    }

    .arrow.desktop {
        display: none;
    }

    .arrow.mobile {
        display: block;
    }
  }
</style>
