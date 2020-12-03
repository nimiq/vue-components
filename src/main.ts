// Components
export { default as Account } from './components/Account.vue';
export { default as AccountDetails } from './components/AccountDetails.vue';
export { default as AccountList } from './components/AccountList.vue';
export { default as AccountRing } from './components/AccountRing.vue';
export { default as AccountSelector } from './components/AccountSelector.vue';
export { default as AddressDisplay } from './components/AddressDisplay.vue';
export { default as AddressInput } from './components/AddressInput.vue';
export { default as Amount } from './components/Amount.vue';
export { default as AmountInput } from './components/AmountInput.vue';
export { default as AmountWithFee } from './components/AmountWithFee.vue';
export { default as BottomOverlay } from './components/BottomOverlay.vue';
export { default as Carousel } from './components/Carousel.vue';
export { default as CircleSpinner } from './components/CircleSpinner.vue';
export { default as CloseButton } from './components/CloseButton.vue';
export { default as Copyable } from './components/Copyable.vue';
export { default as CopyableField } from './components/CopyableField.vue';
export { default as FiatAmount } from './components/FiatAmount.vue';
export { default as Identicon } from './components/Identicon.vue';
export { default as LabelInput } from './components/LabelInput.vue';
export { default as LoadingSpinner } from './components/LoadingSpinner.vue';
export { default as PageBody } from './components/PageBody.vue';
export { default as PageFooter } from './components/PageFooter.vue';
export { default as PageHeader } from './components/PageHeader.vue';
export { default as PaymentInfoLine } from './components/PaymentInfoLine.vue';
export { default as QrCode } from './components/QrCode.vue';
export { default as QrScanner } from './components/QrScanner.vue';
export { default as SelectBar } from './components/SelectBar.vue';
export { default as SmallPage } from './components/SmallPage.vue';
export { default as Timer } from './components/Timer.vue';
export { default as Tooltip } from './components/Tooltip.vue';
export { default as Wallet } from './components/Wallet.vue';

// Comment out unused icons in the components/Icons.ts file
export * from './components/Icons';

export { default as I18nMixin } from './i18n/I18nMixin';

declare global {
    interface Window {
        NIMIQ_VUE_COMPONENTS_IMAGE_ASSET_PATH?: string;
    }
}

/**
 * Set a specific public path / base path (see https://webpack.js.org/guides/public-path/) from where assets like
 * translation files, identicons or the qr scanner worker should be loaded. By default, this is the path from where
 * the importing script is loaded, derived from the importing script's currentScript src.
 *
 * Optionally, you can define a different path for image assets.
 */
export function setAssetPublicPath(path: string, imageAssetsPath?: string) {
    // See https://webpack.js.org/guides/public-path/#on-the-fly.
    // Note that the default for build target "lib" is set via @vue/cli-service/lib/commands/build/setPublicPath.js and
    // can not be overwritten via publicPath in vue.config.js.
    __webpack_public_path__ = `${path}${!path.endsWith('/') ? '/' : ''}`;

    if (typeof imageAssetsPath === 'string') {
        self.NIMIQ_VUE_COMPONENTS_IMAGE_ASSET_PATH = `${imageAssetsPath}${!imageAssetsPath.endsWith('/') ? '/' : ''}`;
    }
}
