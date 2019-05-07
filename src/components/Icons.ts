import { VueConstructor, CreateElement } from 'vue';

const IconBase = (component: VueConstructor) => ({
    functional: true,
    render(createElement: CreateElement) {
        return createElement(component, { class: 'nq-icon' });
    },
});

/**
 * SVG files in an /icons/ directory are automatically loaded as Vue components
 * via the vue-svg-loader.
 */
import AlertTriangle from '@nimiq/style/src/icons/alert-triangle.svg';
import ArrowLeftSmall from '@nimiq/style/src/icons/arrow-left-small.svg';
import ArrowLeft from '@nimiq/style/src/icons/arrow-left.svg';
import ArrowRightSmall from '@nimiq/style/src/icons/arrow-right-small.svg';
import ArrowRight from '@nimiq/style/src/icons/arrow-right.svg';
import BrowserLogin from '@nimiq/style/src/icons/browser-login.svg';
import CaretRightSmall from '@nimiq/style/src/icons/caret-right-small.svg';
import Checkmark from '@nimiq/style/src/icons/checkmark.svg';
import Close from '@nimiq/style/src/icons/close.svg';
import Contacts from '@nimiq/style/src/icons/contacts.svg';
import Copy from '@nimiq/style/src/icons/copy.svg';
import Download from '@nimiq/style/src/icons/download.svg';
import FaceNeutral from '@nimiq/style/src/icons/face-neutral.svg';
import FaceSad from '@nimiq/style/src/icons/face-sad.svg';
import Fire from '@nimiq/style/src/icons/fire.svg';
import Gear from '@nimiq/style/src/icons/gear.svg';
import Hexagon from '@nimiq/style/src/icons/hexagon.svg';
import InfoCircle from '@nimiq/style/src/icons/info-circle.svg';
import Keys from '@nimiq/style/src/icons/keys.svg';
import Ledger from '@nimiq/style/src/icons/ledger.svg';
import LockLocked from '@nimiq/style/src/icons/lock-locked.svg';
import LockUnlocked from '@nimiq/style/src/icons/lock-unlocked.svg';
import Login from '@nimiq/style/src/icons/login.svg';
import MenuDots from '@nimiq/style/src/icons/menu-dots.svg';
import PaperEdit from '@nimiq/style/src/icons/paper-edit.svg';
import PlusCircle from '@nimiq/style/src/icons/plus-circle.svg';
import QrCode from '@nimiq/style/src/icons/qr-code.svg';
import Questionmark from '@nimiq/style/src/icons/questionmark.svg';
import ScanQrCode from '@nimiq/style/src/icons/scan-qr-code.svg';
import Settings from '@nimiq/style/src/icons/settings.svg';
import Shredder from '@nimiq/style/src/icons/shredder.svg';
import Skull from '@nimiq/style/src/icons/skull.svg';
import Transfer from '@nimiq/style/src/icons/transfer.svg';
import ViewOff from '@nimiq/style/src/icons/view-off.svg';
import View from '@nimiq/style/src/icons/view.svg';

/**
 * Comment out any unused icons here
 */
// export const AlertTriangleIcon = IconBase(AlertTriangle);
export const ArrowLeftSmallIcon = IconBase(ArrowLeftSmall);
export const ArrowLeftIcon = IconBase(ArrowLeft);
// export const ArrowRightSmallIcon = IconBase(ArrowRightSmall);
export const ArrowRightIcon = IconBase(ArrowRight);
// export const BrowserLoginIcon = IconBase(BrowserLogin);
export const CaretRightSmallIcon = IconBase(CaretRightSmall);
export const CheckmarkIcon = IconBase(Checkmark);
export const CloseIcon = IconBase(Close);
// export const ContactsIcon = IconBase(Contacts);
// export const CopyIcon = IconBase(Copy);
// export const DownloadIcon = IconBase(Download);
export const FaceNeutralIcon = IconBase(FaceNeutral);
export const FaceSadIcon = IconBase(FaceSad);
// export const FireIcon = IconBase(Fire);
// export const GearIcon = IconBase(Gear);
export const HexagonIcon = IconBase(Hexagon);
export const InfoCircleIcon = IconBase(InfoCircle);
// export const KeysIcon = IconBase(Keys);
export const LedgerIcon = IconBase(Ledger);
// export const LockLockedIcon = IconBase(LockLocked);
// export const LockUnlockedIcon = IconBase(LockUnlocked);
export const LoginIcon = IconBase(Login);
// export const MenuDotsIcon = IconBase(MenuDots);
// export const PaperEditIcon = IconBase(PaperEdit);
export const PlusCircleIcon = IconBase(PlusCircle);
// export const QrCodeIcon = IconBase(QrCode);
// export const QuestionmarkIcon = IconBase(Questionmark);
// export const ScanQrCodeIcon = IconBase(ScanQrCode);
// export const SettingsIcon = IconBase(Settings);
// export const ShredderIcon = IconBase(Shredder);
// export const SkullIcon = IconBase(Skull);
// export const TransferIcon = IconBase(Transfer);
// export const ViewOffIcon = IconBase(ViewOff);
// export const ViewIcon = IconBase(View);
