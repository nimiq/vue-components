<template>
    <svg class="nq-icon" v-html="useTag"></svg>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

/**
 * # Icons
 *
 * Comment out the ones not used for the build target.
 *
 * The call to each imported icon at the end of each line is because the imported
 * variable has to be used to be processed by webpack. The assignment to _ is to
 * avoid unused-expression warnings by tslint for this file.
 */
let _;
import AlertTriangle from '@nimiq/style/src/icons/alert-triangle.svg'; _ = AlertTriangle;
import ArrowLeftSmall from '@nimiq/style/src/icons/arrow-left-small.svg'; _ = ArrowLeftSmall;
import ArrowLeft from '@nimiq/style/src/icons/arrow-left.svg'; _ = ArrowLeft;
import ArrowRightSmall from '@nimiq/style/src/icons/arrow-right-small.svg'; _ = ArrowRightSmall;
import ArrowRight from '@nimiq/style/src/icons/arrow-right.svg'; _ = ArrowRight;
import BrowserLogin from '@nimiq/style/src/icons/browser-login.svg'; _ = BrowserLogin;
import CaretRightSmall from '@nimiq/style/src/icons/caret-right-small.svg'; _ = CaretRightSmall;
import Checkmark from '@nimiq/style/src/icons/checkmark.svg'; _ = Checkmark;
import Close from '@nimiq/style/src/icons/close.svg'; _ = Close;
import Contacts from '@nimiq/style/src/icons/contacts.svg'; _ = Contacts;
import Copy from '@nimiq/style/src/icons/copy.svg'; _ = Copy;
import Download from '@nimiq/style/src/icons/download.svg'; _ = Download;
import FaceNeutral from '@nimiq/style/src/icons/face-neutral.svg'; _ = FaceNeutral;
import FaceSad from '@nimiq/style/src/icons/face-sad.svg'; _ = FaceSad;
import Fire from '@nimiq/style/src/icons/fire.svg'; _ = Fire;
import Gear from '@nimiq/style/src/icons/gear.svg'; _ = Gear;
import Hexagon from '@nimiq/style/src/icons/hexagon.svg'; _ = Hexagon;
import InfoCircle from '@nimiq/style/src/icons/info-circle.svg'; _ = InfoCircle;
import Keys from '@nimiq/style/src/icons/keys.svg'; _ = Keys;
import Ledger from '@nimiq/style/src/icons/ledger.svg'; _ = Ledger;
import LockLocked from '@nimiq/style/src/icons/lock-locked.svg'; _ = LockLocked;
import LockUnlocked from '@nimiq/style/src/icons/lock-unlocked.svg'; _ = LockUnlocked;
import Login from '@nimiq/style/src/icons/login.svg'; _ = Login;
import MenuDots from '@nimiq/style/src/icons/menu-dots.svg'; _ = MenuDots;
import PaperEdit from '@nimiq/style/src/icons/paper-edit.svg'; _ = PaperEdit;
import PlusCircle from '@nimiq/style/src/icons/plus-circle.svg'; _ = PlusCircle;
import QrCode from '@nimiq/style/src/icons/qr-code.svg'; _ = QrCode;
import Questionmark from '@nimiq/style/src/icons/questionmark.svg'; _ = Questionmark;
import ScanQrCode from '@nimiq/style/src/icons/scan-qr-code.svg'; _ = ScanQrCode;
import Settings from '@nimiq/style/src/icons/settings.svg'; _ = Settings;
import Shredder from '@nimiq/style/src/icons/shredder.svg'; _ = Shredder;
import Skull from '@nimiq/style/src/icons/skull.svg'; _ = Skull;
import Transfer from '@nimiq/style/src/icons/transfer.svg'; _ = Transfer;
import ViewOff from '@nimiq/style/src/icons/view-off.svg'; _ = ViewOff;
import View from '@nimiq/style/src/icons/view.svg'; _ = View;

@Component
export default class Icon extends Vue {
    @Prop(String) private name!: string;

    private get useTag() {
        return `<use xlink:href="#nq-${this.name}"/>`;
    }
}
</script>
