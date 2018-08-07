<template>
    <div class="login">
        <div class="big-char" :style="'background-color:' + color">{{ userFriendlyId.toUpperCase().split(" ").reduce((a, b) => a + b[0], "") }}</div>
        <div class="login-description" v-if="label">
            <div class="label">{{ label }}</div>
            <div class="id">{{ userFriendlyId }}</div>
        </div>
        <div class="login-description id-only" v-if="!label">
            <div class="id">{{ userFriendlyId }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    
    @Component
    export default class Account extends Vue {
        @Prop(String) public label?: string;
        @Prop(String) public userFriendlyId!: string;
        @Prop(String) public id!: string;

        get color() {
            switch (this.id[0]) {
                case '0': return '#e57373';
                case '1': return '#f06292';
                case '2': return '#ba68c8';
                case '3': return '#9575cd';
                case '4': return '#7986cb';
                case '5': return '#64b5f6';
                case '6': return '#4fc3f7';
                case '7': return '#4dd0e1';
                case '8': return '#4db6ac';
                case '9': return '#81c784';
                case 'a': return '#aed581';
                case 'b': return '#dce775';
                case 'c': return '#fff176';
                case 'd': return '#ffd54f';
                case 'e': return '#ffb74d';
                case 'f': return '#ff8a65';
                default: return '#eeeeee';
            }
        }
    }
</script>

<style scoped>
    .login {
        display: grid;
        grid-template-columns: 3.5rem auto;
        align-items: center;
        max-width: 18.25rem;
    }
    
    .login .big-char {
        font-size: 120%;
        padding-top: 0.5rem;
        color: white;
        height: 1.9rem;
        width: 2.5rem;
        margin: 0.6rem 0.8rem 0.5rem 0.2rem;
        background: rgba(0,0,0,0.1);
        border-radius: 1.25rem;
        text-align: center;
        vertical-align: middle;
    }
    
    .login .label {
        font-weight: bold;
        padding-bottom: 0.1rem;
    }
    
    .login .id {
        font-weight: 300;
        font-size: 80%;
    }
    
    .login .id-only .id {
        font-size: 100%;
    }

    @media (min-width: 430px) {
        .login {
            grid-template-columns: 4.5rem 19.5rem;
            max-width: 24rem;
        }
        .login .big-char {
            margin: 0.5rem 1.3rem 0.5rem 0.7rem
        }
    }
</style>
