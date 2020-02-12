import { Vue } from 'vue-property-decorator';
declare class BottomOverlay extends Vue {
    theme: string;
    private hasCloseButton;
    private _onListenerChange;
}
declare namespace BottomOverlay {
    enum Events {
        CLOSE = "close"
    }
}
export default BottomOverlay;
