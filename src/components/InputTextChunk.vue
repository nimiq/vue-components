<template>
    <div class="input-address">
        <input v-model= "text" :class="'length'+text.length.toString()" type="text" maxlength="4" :disabled="disabled"/>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Vue, Provide} from 'vue-property-decorator';
import '@nimiq/style/nimiq-style.min.css'


@Component({components: {}})
export default class InputTextChunk extends Vue {

    @Prop(Boolean, {default: false}) public disabled!: boolean;

    public data() {
        return {
            text: ''
        }
    };

}


</script>

<style scoped>
  form {
        background-color: white;
        padding: 10px;
    }

    .full {
        color: red;
    }

    input {
        /*letter-spacing: 0.1em;*/
        text-transform: uppercase;
        width: 3em;
        font-family: 'Fira Mono', system-ui, sans-serif;
        font-family: Fira Mono;
        font-style: normal;
        font-weight: normal;
        line-height: 24px;
        font-size: 24px;
        border: 2px solid #DDD;
        border-radius: 4px;
        margin: 4px;
        box-sizing: border-box;

        size: 4;

        /* Light Blue */
        mix-blend-mode: normal;
        /*opacity: 0.6;   */
        outline: none;
    }

    input.length0 {
        color: var(--nimiq-light-blue);
      
    }

    input.length1 {
        color: var(--nimiq-light-blue);
        border-color: var(--nimiq-light-blue);
    }

    input.length2 {
        color: var(--nimiq-light-blue); 
        border-color: var(--nimiq-light-blue);
    }

    input.length3 {
        color: var(--nimiq-light-blue);
        border-color: var(--nimiq-light-blue);
    }

    input.length4 {
        color: var(--nimiq-blue);
        border-color: white;
    }

    input:disabled {
        color: #dadada;
    }

</style>
