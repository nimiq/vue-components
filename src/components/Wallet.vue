<template>
    <div class="wallet">
        <AccountRing :addresses="addresses"/>
        <div class="wallet-description">
            <div class="label">{{ wallet.label }}</div>
            <div class="amount-container" :class="{'nq-orange': exportMissing}">
                <AlertTriangleIcon v-if="exportMissing"/>
                <Amount v-if="wallet.balance !== undefined" :amount="wallet.balance" :decimals="0"/>
            </div>
        </div>
        <button v-if="isBip39 || isLedger" class="menu-toggle" @click.stop>
            <MenuDotsIcon/>
            <div class="menu nq-blue-bg">
                <button v-if="isBip39" class="item export" @click="$emit('export-file', wallet.id)">
                    Save Login File<AlertTriangleIcon v-if="fileMissing" class="nq-orange"/>
                </button>
                <button v-if="isBip39" class="item export" @click="$emit('export-words', wallet.id)">
                    Create Backup<AlertTriangleIcon v-if="wordsMissing" class="nq-orange"/>
                </button>
                <button class="item" @click="$emit('rename', wallet.id)">Rename</button>
                <button v-if="isBip39" class="item" @click="$emit('change-password', wallet.id)">Change Password</button>
                <div class="separator"></div>
                <button class="item logout" @click="$emit('logout', wallet.id)"><ArrowRightSmallIcon/>Logout</button>
            </div>
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AccountRing from './AccountRing.vue';
import Amount from './Amount.vue';
import { AlertTriangleIcon, MenuDotsIcon, ArrowRightSmallIcon } from './Icons';

@Component({components: { AccountRing, Amount, AlertTriangleIcon, MenuDotsIcon, ArrowRightSmallIcon }})
export default class Wallet extends Vue {
    @Prop(Object) private wallet!: {
        id: string,
        label: string,
        accounts: any[],
        type: number,
        fileExported: boolean,
        wordsExported: boolean,
        balance?: number,
    };

    get addresses() {
        return this.wallet.accounts
            .reduce((addresses: string[], account: any) => addresses.concat(account.address), []);
    }

    get isBip39(): boolean {
        return this.wallet.type === 2 /* BIP39 */;
    }

    get isLedger(): boolean {
        return this.wallet.type === 3 /* LEDGER */;
    }

    get fileMissing(): boolean {
        return this.isBip39 && !this.wallet.fileExported;
    }

    get wordsMissing(): boolean {
        return this.isBip39 && !this.wallet.wordsExported;
    }

    get exportMissing(): boolean {
        return this.fileMissing || this.wordsMissing;
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
        height: 10rem;
    }

    .wallet-description {
        flex-grow: 1;
        min-width: 0;
    }

    .account-ring {
        width: 7rem;
        height: 7rem;
        margin-left: 2rem;
        margin-right: 1.5rem;
        flex-shrink: 0;
        user-select: none;
    }

    .label {
        font-weight: bold;
        font-size: 2.25rem;
        line-height: 3rem;
        white-space: nowrap;
        mask-image: linear-gradient(90deg , white, white calc(100% - 3rem), rgba(255,255,255, 0));
    }

    .amount-container {
        font-size: 1.75rem;
        font-weight: 600;
        line-height: 2rem;
        opacity: .5;
        display: flex;
    }

    .amount-container.nq-orange {
        opacity: 1;
    }

    .amount-container .nq-icon {
        margin-right: 1rem;
        font-size: 2rem;
    }

    .menu-toggle {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 0;
        width: 7rem;
        height: 100%;
        opacity: 0;
        pointer-events: none;
        font-family: inherit;
        transition: opacity .2s;
        outline: none;
        flex-shrink: 0;
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
        cursor: auto;
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
        color: rgba(255, 255, 255, .6);
        font-family: inherit;
        text-align: left;
        cursor: pointer;
        font-size: 2rem;
        line-height: 3.75rem;
        font-weight: 600;
        width: 100%;
        padding: 0 1rem;
        margin-bottom: .75rem;
        transition: color .2s;
    }

    .menu .item:last-child {
        margin-bottom: 0;
    }

    .menu .item:hover,
    .menu .item:focus {
        color: white;
    }

    .menu .item:last-child:hover,
    .menu .item:last-child:focus {
        color: var(--nimiq-red);
    }

    .menu .item .nq-icon {
        vertical-align: middle;
        margin-bottom: .25rem;
    }

    .menu .export .nq-icon {
        margin-left: 1rem;
        color: var(--nimiq-orange);
    }

    .menu .logout .nq-icon {
        margin-right: 1rem;
    }

    .menu .separator {
        margin-top: 1.75rem;
        margin-bottom: 1rem;
        background: white;
        width: 100%;
        height: 1px;
        opacity: .1;
    }
</style>
