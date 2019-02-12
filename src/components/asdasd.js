    private preCalcTextDelete(): object {
        const t = this.$refs.textarea;
        const v = t.value;
        const s = t.selectionStart;
        let e = t.selectionEnd;
        let c = s;
        if (s == e) {
            e++;
            try {
                if (v[s].match(/\W/)) {
                    e--;
                    c = e + 1;
                }
            } catch (err) {}
        }
        const a = v.substr(0, s);
        const m = v.substr(s, e);   // highlighted text
        const b = v.substr(e, v.length);
        const n = formatAddress(a + b); // new text generated after formatting
        return {a, m, b, c, n, s, e};
    }

    private preCalcTextBackspace(): object {
        const t = this.$refs.textarea;
        const v = t.value;
        let s = t.selectionStart;
        const e = t.selectionEnd;
        const c = (s == e) ? s - 1 : s;
        s = (s == e) ? s - 1 : s;
        const a = v.substr(0, s);
        const m = v.substr(s, e);   // highlighted text
        const b = v.substr(e, v.length);
        const n = formatAddress(a + b); // new text generated after formatting
        return {a, m, b, c, n, s, e};
    }

    private preCalcTextInput(input: string): object {
        const t = this.$refs.textarea;
        const v = t.value;
        const s = t.selectionStart;
        const e = t.selectionEnd;
        const a = v.substr(0, s);
        const m = v.substr(s, e);
        const b = v.substr(e, v.length);
        const c = formatAddress(a + input).length; // new caret position
        const n = formatAddress(a + input + b); // new text generated after formatting
        return {a, m, b, c, n, input, s, e};
    }