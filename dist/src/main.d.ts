export { default as AddressDisplay } from './components/AddressDisplay.vue';
export { default as AddressInput } from './components/AddressInput.vue';
export { default as Amount } from './components/Amount.vue';
export { default as AmountInput } from './components/AmountInput.vue';
export { default as BottomOverlay } from './components/BottomOverlay.vue';
export { default as CircleSpinner } from './components/CircleSpinner.vue';
export { default as CloseButton } from './components/CloseButton.vue';
export { default as Copyable } from './components/Copyable.vue';
export { default as FiatAmount } from './components/FiatAmount.vue';
export { default as Identicon } from './components/Identicon.vue';
export { default as LabelInput } from './components/LabelInput.vue';
export { default as LoadingSpinner } from './components/LoadingSpinner.vue';
export { default as LongPressButton } from './components/LongPressButton.vue';
export { default as PageBody } from './components/PageBody.vue';
export { default as PageFooter } from './components/PageFooter.vue';
export { default as PageHeader } from './components/PageHeader.vue';
export { default as QrCode } from './components/QrCode.vue';
export { default as QrScanner } from './components/QrScanner.vue';
export { default as SelectBar } from './components/SelectBar.vue';
export { default as SmallPage } from './components/SmallPage.vue';
export { default as Timer } from './components/Timer.vue';
export { default as Tooltip } from './components/Tooltip.vue';
export * from './components/Icons';
export { default as I18nMixin } from './i18n/I18nMixin';
declare global {
    interface Window {
        NIMIQ_VUE_COMPONENTS_IMAGE_ASSET_PATH?: string;
    }
}
/**
 * Set a specific public path / base path (see https://webpack.js.org/guides/public-path/) from where assets like
 * translation files or identicons should be loaded. By default, this is the path from where the importing script is
 * loaded, derived from the importing script's currentScript src.
 *
 * Optionally, you can define a different path for image assets.
 */
export declare function setAssetPublicPath(path: string, imageAssetsPath?: string): void;
