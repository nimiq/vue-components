<template>
    <component class="nq-icon" :is="componentName"/>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

import AlertTriangleIcon from '@nimiq/style/src/icons/alert-triangle.svg';
import ArrowLeftSmallIcon from '@nimiq/style/src/icons/arrow-left-small.svg';
import ArrowLeftIcon from '@nimiq/style/src/icons/arrow-left.svg';
import ArrowRightSmallIcon from '@nimiq/style/src/icons/arrow-right-small.svg';
import ArrowRightIcon from '@nimiq/style/src/icons/arrow-right.svg';
import BrowserLoginIcon from '@nimiq/style/src/icons/browser-login.svg';
import CaretRightSmallIcon from '@nimiq/style/src/icons/caret-right-small.svg';
import CheckmarkIcon from '@nimiq/style/src/icons/checkmark.svg';
import CloseIcon from '@nimiq/style/src/icons/close.svg';
import ContactsIcon from '@nimiq/style/src/icons/contacts.svg';
import CopyIcon from '@nimiq/style/src/icons/copy.svg';
import DownloadIcon from '@nimiq/style/src/icons/download.svg';
import FaceNeutralIcon from '@nimiq/style/src/icons/face-neutral.svg';
import FaceSadIcon from '@nimiq/style/src/icons/face-sad.svg';
import FireIcon from '@nimiq/style/src/icons/fire.svg';
import GearIcon from '@nimiq/style/src/icons/gear.svg';
import HexagonIcon from '@nimiq/style/src/icons/hexagon.svg';
import InfoCircleIcon from '@nimiq/style/src/icons/info-circle.svg';
import KeysIcon from '@nimiq/style/src/icons/keys.svg';
import LedgerIcon from '@nimiq/style/src/icons/ledger.svg';
import LockLockedIcon from '@nimiq/style/src/icons/lock-locked.svg';
import LockUnlockedIcon from '@nimiq/style/src/icons/lock-unlocked.svg';
import LoginIcon from '@nimiq/style/src/icons/login.svg';
import MenuDotsIcon from '@nimiq/style/src/icons/menu-dots.svg';
import PaperEditIcon from '@nimiq/style/src/icons/paper-edit.svg';
import PlusCircleIcon from '@nimiq/style/src/icons/plus-circle.svg';
import QrCodeIcon from '@nimiq/style/src/icons/qr-code.svg';
import QuestionmarkIcon from '@nimiq/style/src/icons/questionmark.svg';
import ScanQrCodeIcon from '@nimiq/style/src/icons/scan-qr-code.svg';
import SettingsIcon from '@nimiq/style/src/icons/settings.svg';
import ShredderIcon from '@nimiq/style/src/icons/shredder.svg';
import SkullIcon from '@nimiq/style/src/icons/skull.svg';
import TransferIcon from '@nimiq/style/src/icons/transfer.svg';
import ViewOffIcon from '@nimiq/style/src/icons/view-off.svg';
import ViewIcon from '@nimiq/style/src/icons/view.svg';

/**
 * # Icons
 *
 * Comment out the ones not used for the build target.
 */
@Component({components: {
    AlertTriangleIcon,
    ArrowLeftSmallIcon,
    ArrowLeftIcon,
    ArrowRightSmallIcon,
    ArrowRightIcon,
    BrowserLoginIcon,
    CaretRightSmallIcon,
    CheckmarkIcon,
    CloseIcon,
    ContactsIcon,
    CopyIcon,
    DownloadIcon,
    FaceNeutralIcon,
    FaceSadIcon,
    FireIcon,
    GearIcon,
    HexagonIcon,
    InfoCircleIcon,
    KeysIcon,
    LedgerIcon,
    LockLockedIcon,
    LockUnlockedIcon,
    LoginIcon,
    MenuDotsIcon,
    PaperEditIcon,
    PlusCircleIcon,
    QrCodeIcon,
    QuestionmarkIcon,
    ScanQrCodeIcon,
    SettingsIcon,
    ShredderIcon,
    SkullIcon,
    TransferIcon,
    ViewOffIcon,
    ViewIcon,
}})
export default class Icon extends Vue {
    @Prop(String) private name!: string;

    private get componentName() {
        return `${this.name}-icon`;
    }
}
</script>
