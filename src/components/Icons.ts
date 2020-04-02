import { VueConstructor, CreateElement, RenderContext } from 'vue';

// See https://vuejs.org/v2/guide/render-function.html for documentation on createElement and functional components
// tslint:disable-next-line:variable-name
const IconBase = (component: VueConstructor) => ({
    functional: true,
    render(createElement: CreateElement, context: RenderContext) {
        return createElement(component, Object.assign({ class: 'nq-icon' }, context.data));
    },
} as any); // Should be FunctionalComponentOptions (imported from 'vue'), but as such cannot be imported in accounts...

/**
 * SVG files in an /icons/ directory are automatically loaded as Vue components
 * via the vue-svg-loader.
 */
import AlertTriangle from '@nimiq/style/src/icons/alert-triangle.svg';
import ArrowLeftSmall from '@nimiq/style/src/icons/arrow-left-small.svg';
import ArrowLeft from '@nimiq/style/src/icons/arrow-left.svg';
import ArrowRightSmall from '@nimiq/style/src/icons/arrow-right-small.svg';
import ArrowRight from '@nimiq/style/src/icons/arrow-right.svg';
import CaretRightSmall from '@nimiq/style/src/icons/caret-right-small.svg';
import Cashlink from '@nimiq/style/src/icons/cashlink.svg';
import CashlinkSmall from '@nimiq/style/src/icons/cashlink-small.svg';
import CashlinkXSmall from '@nimiq/style/src/icons/cashlink-xsmall.svg';
import Checkmark from '@nimiq/style/src/icons/checkmark.svg';
import CheckmarkSmall from '@nimiq/style/src/icons/checkmark-small.svg';
import Close from '@nimiq/style/src/icons/close.svg';
import Contacts from '@nimiq/style/src/icons/contacts.svg';
import Copy from '@nimiq/style/src/icons/copy.svg';
import Cross from '@nimiq/style/src/icons/cross.svg';
import Download from '@nimiq/style/src/icons/download.svg';
import FaceNeutral from '@nimiq/style/src/icons/face-neutral.svg';
import FaceSad from '@nimiq/style/src/icons/face-sad.svg';
import Gear from '@nimiq/style/src/icons/gear.svg';
import Hexagon from '@nimiq/style/src/icons/hexagon.svg';
import InfoCircle from '@nimiq/style/src/icons/info-circle.svg';
import InfoCircleSmall from '@nimiq/style/src/icons/info-circle-small.svg';
import Keys from '@nimiq/style/src/icons/keys.svg';
import Ledger from '@nimiq/style/src/icons/ledger.svg';
import LockLocked from '@nimiq/style/src/icons/lock-locked.svg';
import LockUnlocked from '@nimiq/style/src/icons/lock-unlocked.svg';
import Login from '@nimiq/style/src/icons/login.svg';
import MenuDots from '@nimiq/style/src/icons/menu-dots.svg';
import PlusCircle from '@nimiq/style/src/icons/plus-circle.svg';
import QrCode from '@nimiq/style/src/icons/qr-code.svg';
import Questionmark from '@nimiq/style/src/icons/questionmark.svg';
import ScanQrCode from '@nimiq/style/src/icons/scan-qr-code.svg';
import Settings from '@nimiq/style/src/icons/settings.svg';
import Stopwatch from '@nimiq/style/src/icons/stopwatch.svg';
import Transfer from '@nimiq/style/src/icons/transfer.svg';
import UnderPayment from '@nimiq/style/src/icons/under-payment.svg';
import ViewOff from '@nimiq/style/src/icons/view-off.svg';
import View from '@nimiq/style/src/icons/view.svg';

/**
 * Comment out any unused icons here
 */
// tslint:disable:variable-name
export const AlertTriangleIcon = IconBase(AlertTriangle);
export const ArrowLeftSmallIcon = IconBase(ArrowLeftSmall);
export const ArrowLeftIcon = IconBase(ArrowLeft);
export const ArrowRightSmallIcon = IconBase(ArrowRightSmall);
export const ArrowRightIcon = IconBase(ArrowRight);
export const CaretRightSmallIcon = IconBase(CaretRightSmall);
export const CashlinkIcon = IconBase(Cashlink);
export const CashlinkSmallIcon = IconBase(CashlinkSmall);
export const CashlinkXSmallIcon = IconBase(CashlinkXSmall);
export const CheckmarkIcon = IconBase(Checkmark);
export const CheckmarkSmallIcon = IconBase(CheckmarkSmall);
export const CloseIcon = IconBase(Close);
export const ContactsIcon = IconBase(Contacts);
export const CopyIcon = IconBase(Copy);
export const CrossIcon = IconBase(Cross);
export const DownloadIcon = IconBase(Download);
export const FaceNeutralIcon = IconBase(FaceNeutral);
export const FaceSadIcon = IconBase(FaceSad);
export const GearIcon = IconBase(Gear);
export const HexagonIcon = IconBase(Hexagon);
export const InfoCircleIcon = IconBase(InfoCircle);
export const InfoCircleSmallIcon = IconBase(InfoCircleSmall);
export const KeysIcon = IconBase(Keys);
export const LedgerIcon = IconBase(Ledger);
export const LockLockedIcon = IconBase(LockLocked);
export const LockUnlockedIcon = IconBase(LockUnlocked);
export const LoginIcon = IconBase(Login);
export const MenuDotsIcon = IconBase(MenuDots);
export const PlusCircleIcon = IconBase(PlusCircle);
export const QrCodeIcon = IconBase(QrCode);
export const QuestionmarkIcon = IconBase(Questionmark);
export const ScanQrCodeIcon = IconBase(ScanQrCode);
export const SettingsIcon = IconBase(Settings);
export const StopwatchIcon = IconBase(Stopwatch);
export const TransferIcon = IconBase(Transfer);
export const UnderPaymentIcon = IconBase(UnderPayment);
export const ViewOffIcon = IconBase(ViewOff);
export const ViewIcon = IconBase(View);
// tslint:enable:variable-name
