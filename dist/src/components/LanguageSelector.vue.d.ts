import { Vue } from 'vue-property-decorator';
export default class LanguageSelector extends Vue {
    languages: string[];
    value?: string;
    private selectedLanguage;
    private isListShown;
    private closeTimeout;
    $refs: {
        'list-entries'?: HTMLDivElement[];
    };
    private _onLanguagesChange;
    private _onExternalValueChange;
    private _onValueChange;
    private _showList;
    private _hideList;
    private _moveListFocus;
    private _focusListEntry;
}
