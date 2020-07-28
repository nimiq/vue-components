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
        small, medium, inverse, }]"
    :target="(link && link.startsWith('http')) ? '_blank' : '_self'">

    <span>{{ $t(text) }}</span>
    <ArrowRightSmallIcon v-if="arrow || back" class="arrow"/>
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
    @Prop(Boolean) private small?: boolean; // "big" is default
    @Prop(Boolean) private medium?: boolean;
    @Prop(Boolean) private inverse?: boolean;
    @Prop(Boolean) private back?: boolean;
}
</script>

<style scoped>

a.disabled {
opacity: 0.5;
pointer-events: none;
}

a.has-arrow {
display: inline-flex;
align-items: center;
justify-content: center;
}

a .arrow {
    font-size: 2.125rem;
    margin-left: 8px;
    transition: transform .4s cubic-bezier(.25,0,0,1);
    fill: #fff;
}

a.small .arrow {
  font-size: 1.4375rem;
}

a.medium {
  margin: 0;
  justify-content: center;
  align-items: center;

  padding: 1.5rem 0;
  flex-grow: 1;
  height: unset;
  line-height: 1;
  border-radius: 500px;
  font-size: 2rem;
}

a.medium .nq-icon {
  font-size: 1.75rem;
  margin-right: 1rem;
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

@media (max-width: 850px) {
  .nq-button {
    padding: 0 24px;
    height: 50px;
  }

  a.small .arrow {
    margin-left: 6px;
  }

  a.small.go-back .arrow {
    margin-left: 0;
    margin-right: 6px;
  }

  a .arrow {
    font-size: 1.625rem;
  }

  a.small .arrow {
    font-size: 1.3125rem;
  }
}
</style>
