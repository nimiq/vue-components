import Vue from 'vue';

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        asyncComputed?: any;
    }
}

type AsyncComputed = any;
