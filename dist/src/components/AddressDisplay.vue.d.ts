import { Vue } from 'vue-property-decorator';
export default class AddressDisplay extends Vue {
    address: string;
    format: string;
    copyable: boolean;
    get chunks(): string[];
    get text(): string;
    get chunkTrailingSpaces(): boolean;
}
