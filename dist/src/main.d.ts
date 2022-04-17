export { default as Amount } from './components/Amount.vue';
export { default as CircleSpinner } from './components/CircleSpinner.vue';
export { default as CloseButton } from './components/CloseButton.vue';
export { default as Copyable } from './components/Copyable.vue';
export { default as CopyableField } from './components/CopyableField.vue';
export { default as FiatAmount } from './components/FiatAmount.vue';
export { default as QrCode } from './components/QrCode.vue';
export { default as SmallPage } from './components/SmallPage.vue';
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
 * translation files, identicons or the qr scanner worker should be loaded. By default, this is the path from where
 * the importing script is loaded, derived from the importing script's currentScript src.
 *
 * Optionally, you can define a different path for image assets.
 */
export declare function setAssetPublicPath(path: string, imageAssetsPath?: string): void;
