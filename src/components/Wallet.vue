<template>
    <div class="wallet">
        <AccountRing :addresses="addresses"/>
        <div class="wallet-description">
            <div class="label">{{ wallet.label }}</div>
            <Amount v-if="wallet.balance !== undefined" :amount="wallet.balance" :decimals="0"/>
        </div>
        <button class="menu-toggle" @click.stop>
            <Icon name="menu-dots"/>
            <div class="menu nq-blue-bg">
                <button v-if="wallet.type !== 3 /* LEDGER */" class="item" @click="$emit('export-file', wallet.id)">Save Login File</button>
                <button v-if="wallet.type !== 3 /* LEDGER */" class="item" @click="$emit('export-words', wallet.id)">Create Backup</button>
                <button class="item" @click="$emit('rename', wallet.id)">Rename</button>
                <button v-if="wallet.type !== 3 /* LEDGER */" class="item" @click="$emit('change-password', wallet.id)">Change Password</button>
                <div class="separator"></div>
                <button class="item" @click="$emit('logout', wallet.id)"><Icon name="arrow-right-small"/>Logout</button>
            </div>
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AccountRing from './AccountRing.vue';
import Amount from './Amount.vue';
import Icon from './Icon.vue';

@Component({components: { AccountRing, Amount, Icon }})
export default class Wallet extends Vue {
    @Prop(Object) private wallet!: {
        id: string,
        label: string,
        accounts: any[],
        type: number,
        balance?: number
    };

    get addresses() {
        return this.wallet.accounts
            .reduce((addresses: string[], account: any) => addresses.concat(account.address), []);
    }
}
</script>

<style scoped>
    .wallet {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
    }

    .wallet-description {
        flex-grow: 1;
    }

    .account-ring {
        width: 7rem;
        height: 7rem;
        margin-left: 2rem;
        margin-right: 1.5rem;
    }

    .label {
        font-weight: bold;
        font-size: 2.25rem;
        line-height: 2rem;
        margin-bottom: .5rem;
    }

    .amount {
        font-size: 1.75rem;
        font-weight: 600;
        line-height: 2rem;
        opacity: .5;
    }

    .menu-toggle {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        width: 7rem;
        height: 10rem;
        opacity: 0;
        pointer-events: none;
        font-family: inherit;
        transition: opacity .2s;
        outline: none;
    }

    .wallet:hover .menu-toggle,
    :focus .menu-toggle,
    .menu-toggle:focus,
    .menu-toggle:focus-within,
    .active .menu-toggle {
        opacity: 1;
        pointer-events: all;
    }

    .menu-toggle > .nq-icon {
        font-size: 3.75rem;
        opacity: .3;
        transition: opacity .2s;
    }

    .menu-toggle:hover > .nq-icon,
    .menu-toggle:focus > .nq-icon {
        opacity: .5;
    }

    .menu {
        display: none;
        position: absolute;
        right: 0;
        top: 0;
        list-style: none;
        padding: 1rem;
        border-radius: .5rem;
        z-index: 1;
    }

    .menu-toggle:focus .menu,
    .menu-toggle:focus-within .menu,
    .menu:hover {
        display: block;
    }

    .menu .item {
        display: block;
        background: none;
        border: none;
        color: inherit;
        font-family: inherit;
        text-align: left;
        cursor: pointer;
        opacity: .6;
        font-size: 2rem;
        line-height: 3.75rem;
        font-weight: 600;
        width: 100%;
        padding: 0 1rem;
        margin-bottom: .75rem;
        transition: opacity .2s, color .2s;
    }

    .menu .item:last-child {
        margin-bottom: 0;
    }

    .menu .item:hover,
    .menu .item:focus {
        opacity: 1;
    }

    .menu .item:last-child:hover,
    .menu .item:last-child:focus {
        color: var(--nimiq-red);
    }

    .menu .item .nq-icon {
        vertical-align: middle;
        margin-right: 1rem;
        margin-bottom: .25rem;
    }

    .menu .separator {
        margin-bottom: .75rem;
        background: white;
        opacity: .1;
        width: 100%;
        height: 1px;
    }
</style>
