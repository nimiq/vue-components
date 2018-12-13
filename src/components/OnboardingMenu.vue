<template>
    <SmallPage class="onboarding-menu">
        <button class="choice ledger" tabindex="3" @click="ledger">
            <svg width="188" height="54" viewBox="0 0 188 54" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M272.793 2.89309C272.779 2.89294 272.764 2.89286 272.75 2.89286L4.00013 2.89284C1.79099 2.89284 0.000126382 4.6837 0.000126189 6.89284L0.00012242 50C0.000122227 52.2091 1.79099 54 4.00012 54L140.194 54C126.132 53.9407 114.75 42.5228 114.75 28.4466C114.75 14.3338 126.191 2.89307 140.304 2.89307L272.793 2.89309ZM25.0282 19.4026C25.0282 18.2981 25.9236 17.4026 27.0282 17.4026L96.0515 17.4026C97.1561 17.4026 98.0515 18.2981 98.0515 19.4026L98.0515 38.8419C98.0515 39.9464 97.1561 40.8419 96.0515 40.8419L27.0282 40.8419C25.9236 40.8419 25.0282 39.9465 25.0282 38.8419L25.0282 19.4026Z"/>
                </mask>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M272.793 2.89309C272.779 2.89294 272.764 2.89286 272.75 2.89286L4.00013 2.89284C1.79099 2.89284 0.000126382 4.6837 0.000126189 6.89284L0.00012242 50C0.000122227 52.2091 1.79099 54 4.00012 54L140.194 54C126.132 53.9407 114.75 42.5228 114.75 28.4466C114.75 14.3338 126.191 2.89307 140.304 2.89307L272.793 2.89309ZM25.0282 19.4026C25.0282 18.2981 25.9236 17.4026 27.0282 17.4026L96.0515 17.4026C97.1561 17.4026 98.0515 18.2981 98.0515 19.4026L98.0515 38.8419C98.0515 39.9464 97.1561 40.8419 96.0515 40.8419L27.0282 40.8419C25.9236 40.8419 25.0282 39.9465 25.0282 38.8419L25.0282 19.4026Z"/>
                <path d="M272.793 2.89309L272.793 4.89309L272.814 0.893196L272.793 2.89309ZM140.194 54L140.194 56L140.202 52L140.194 54ZM27.0282 17.4026L27.0282 19.4026L27.0282 17.4026ZM96.0515 17.4026L96.0515 15.4026L96.0515 17.4026ZM96.0515 40.8419L96.0515 38.8419L96.0515 40.8419ZM27.0282 40.8419L27.0282 42.8419L27.0282 40.8419ZM272.814 0.893196C272.792 0.892971 272.771 0.892864 272.75 0.892864L272.75 4.89286C272.758 4.89286 272.765 4.8929 272.772 4.89297L272.814 0.893196ZM272.75 0.892864L4.00013 0.892841L4.00013 4.89284L272.75 4.89286L272.75 0.892864ZM4.00013 0.892841C0.686406 0.89284 -1.99987 3.57913 -1.99987 6.89284L2.00013 6.89284C2.00013 5.78827 2.89554 4.89284 4.00013 4.89284L4.00013 0.892841ZM-1.99987 6.89284L-1.99988 50L2.00012 50L2.00013 6.89284L-1.99987 6.89284ZM-1.99988 50C-1.99988 53.3137 0.686401 56 4.00012 56L4.00012 52C2.89554 52 2.00012 51.1045 2.00012 50L-1.99988 50ZM4.00012 56L140.194 56L140.194 52L4.00012 52L4.00012 56ZM140.202 52C127.241 51.9454 116.75 41.4211 116.75 28.4466L112.75 28.4466C112.75 43.6245 125.022 55.936 140.185 56L140.202 52ZM116.75 28.4466C116.75 15.4384 127.296 4.89307 140.304 4.89307L140.304 0.893074C125.086 0.893073 112.75 13.2292 112.75 28.4466L116.75 28.4466ZM140.304 4.89307L272.793 4.89309L272.793 0.893085L140.304 0.893074L140.304 4.89307ZM27.0282 15.4026C24.8191 15.4026 23.0282 17.1935 23.0282 19.4026L27.0282 19.4026L27.0282 15.4026ZM96.0515 15.4026L27.0282 15.4026L27.0282 19.4026L96.0515 19.4026L96.0515 15.4026ZM100.052 19.4026C100.052 17.1935 98.2607 15.4026 96.0515 15.4026L96.0515 19.4026L100.052 19.4026ZM100.052 38.8419L100.052 19.4026L96.0515 19.4026L96.0515 38.8419L100.052 38.8419ZM96.0515 42.8419C98.2607 42.8419 100.052 41.051 100.052 38.8419L96.0515 38.8419L96.0515 42.8419ZM27.0282 42.8419L96.0515 42.8419L96.0515 38.8419L27.0282 38.8419L27.0282 42.8419ZM23.0282 38.8419C23.0282 41.051 24.8191 42.8419 27.0282 42.8419L27.0282 38.8419L23.0282 38.8419ZM23.0282 19.4026L23.0282 38.8419L27.0282 38.8419L27.0282 19.4026L23.0282 19.4026Z" mask="url(#path-1-inside-1)"/>
                <rect x="19.2856" y="0.000183105" width="19.2857" height="5.78572" rx="2"/>
                <rect x="83.8928" y="0.000183105" width="19.2857" height="5.78572" rx="2"/>
                <mask id="path-5-inside-2">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M139.339 52.0713L272.893 52.0713C273.958 52.0713 274.821 51.2079 274.821 50.1427L274.821 6.74987C274.821 5.68475 273.958 4.8213 272.893 4.8213L139.339 4.82129C126.292 4.82129 115.714 15.3986 115.714 28.4463C115.714 41.494 126.292 52.0713 139.339 52.0713ZM272.893 53.9999C275.023 53.9999 276.75 52.273 276.75 50.1427L276.75 6.74987C276.75 4.61963 275.023 2.89273 272.893 2.89273L139.339 2.89272C125.226 2.89272 113.786 14.3334 113.786 28.4463C113.786 42.5591 125.226 53.9999 139.339 53.9999L272.893 53.9999Z"/>
                </mask>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M139.339 52.0713L272.893 52.0713C273.958 52.0713 274.821 51.2079 274.821 50.1427L274.821 6.74987C274.821 5.68475 273.958 4.8213 272.893 4.8213L139.339 4.82129C126.292 4.82129 115.714 15.3986 115.714 28.4463C115.714 41.494 126.292 52.0713 139.339 52.0713ZM272.893 53.9999C275.023 53.9999 276.75 52.273 276.75 50.1427L276.75 6.74987C276.75 4.61963 275.023 2.89273 272.893 2.89273L139.339 2.89272C125.226 2.89272 113.786 14.3334 113.786 28.4463C113.786 42.5591 125.226 53.9999 139.339 53.9999L272.893 53.9999Z"/>
                <path d="M272.893 50.0713L139.339 50.0713L139.339 54.0713L272.893 54.0713L272.893 50.0713ZM272.821 50.1427C272.821 50.1033 272.853 50.0713 272.893 50.0713L272.893 54.0713C275.063 54.0713 276.821 52.3124 276.821 50.1427L272.821 50.1427ZM272.821 6.74987L272.821 50.1427L276.821 50.1427L276.821 6.74987L272.821 6.74987ZM272.893 6.8213C272.853 6.8213 272.821 6.78933 272.821 6.74987L276.821 6.74987C276.821 4.58018 275.063 2.8213 272.893 2.8213L272.893 6.8213ZM139.339 6.82129L272.893 6.8213L272.893 2.8213L139.339 2.82129L139.339 6.82129ZM117.714 28.4463C117.714 16.5031 127.396 6.82129 139.339 6.82129L139.339 2.82129C125.187 2.82129 113.714 14.294 113.714 28.4463L117.714 28.4463ZM139.339 50.0713C127.396 50.0713 117.714 40.3895 117.714 28.4463L113.714 28.4463C113.714 42.5986 125.187 54.0713 139.339 54.0713L139.339 50.0713ZM274.75 50.1427C274.75 51.1684 273.919 51.9999 272.893 51.9999L272.893 55.9999C276.128 55.9999 278.75 53.3775 278.75 50.1427L274.75 50.1427ZM274.75 6.74987L274.75 50.1427L278.75 50.1427L278.75 6.74987L274.75 6.74987ZM272.893 4.89273C273.919 4.89273 274.75 5.7242 274.75 6.74987L278.75 6.74987C278.75 3.51506 276.128 0.892731 272.893 0.89273L272.893 4.89273ZM139.339 4.89272L272.893 4.89273L272.893 0.89273L139.339 0.892719L139.339 4.89272ZM115.786 28.4463C115.786 15.438 126.331 4.89272 139.339 4.89272L139.339 0.892719C124.122 0.892717 111.786 13.2289 111.786 28.4463L115.786 28.4463ZM139.339 51.9999C126.331 51.9999 115.786 41.4546 115.786 28.4463L111.786 28.4463C111.786 43.6637 124.122 55.9999 139.339 55.9999L139.339 51.9999ZM272.893 51.9999L139.339 51.9999L139.339 55.9999L272.893 55.9999L272.893 51.9999Z" mask="url(#path-5-inside-2)"/>
                <circle cx="139.518" cy="28.5647" r="13.2247" transform="rotate(-180 139.518 28.5647)" fill="none" stroke="currentColor" stroke-width="2"/>
            </svg>
            <h2 class="nq-h2">Connect Ledger</h2>
            <p class="nq-text">Connect your<br>Ledger Nano S.</p>
        </button>

        <button class="choice login" tabindex="2" @click="login">
            <svg width="54" height="54" viewBox="0 0 54 54" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M26.9504 9.82363e-05C13.7962 -0.0526329 2.51148 9.36619 0.211419 22.3178C0.15747 22.6463 0.251723 22.9818 0.46883 23.234C0.685938 23.4863 1.00361 23.6295 1.33642 23.6251H20.0564C20.6777 23.6251 21.1814 23.1214 21.1814 22.5001V14.4001C21.1811 13.5349 21.6769 12.7461 22.4568 12.3713C23.2366 11.9965 24.1623 12.1021 24.8377 12.6428L40.5877 25.2428C41.1216 25.6698 41.4325 26.3164 41.4325 27.0001C41.4325 27.6838 41.1216 28.3304 40.5877 28.7573L24.8377 41.3573C24.4385 41.6766 23.9425 41.8503 23.4314 41.8501C22.1934 41.8391 21.1924 40.8382 21.1814 39.6001V31.5001C21.1814 30.8788 20.6777 30.3751 20.0564 30.3751H1.34992C1.01776 30.3752 0.702193 30.5203 0.485955 30.7724C0.269717 31.0246 0.174372 31.3586 0.224919 31.6868C2.74947 45.6226 15.6128 55.2393 29.6934 53.7177C43.774 52.196 54.2859 40.0532 53.7749 25.8998C53.0621 11.5438 41.3227 0.20906 26.9504 9.82363e-05Z"/></svg>
            <h2 class="nq-h2">Login</h2>
            <p class="nq-text">Use your LoginFile or recovery words.</p>
        </button>

        <button class="choice signup" tabindex="1" @click="signup">
            <svg width="54" height="54" viewBox="0 0 54 54" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54ZM29.5 14C30.0523 14 30.5 14.4477 30.5 15V23.5H39C39.5523 23.5 40 23.9477 40 24.5V29.5C40 30.0523 39.5523 30.5 39 30.5H30.5V39C30.5 39.5523 30.0523 40 29.5 40H24.5C23.9477 40 23.5 39.5523 23.5 39V30.5H15C14.4477 30.5 14 30.0523 14 29.5V24.5C14 23.9477 14.4477 23.5 15 23.5H23.5V15C23.5 14.4477 23.9477 14 24.5 14H29.5Z"/></svg>
            <h2 class="nq-h2">Create Wallet</h2>
            <p class="nq-text">Choose an account. Set a password. Done.</p>
        </button>

        <div class="background-container">
            <div class="background signup nq-green-bg"></div>
            <div class="background login nq-light-blue-bg"></div>
            <div class="background ledger nq-blue-bg"></div>
        </div>
    </SmallPage>
</template>

<script lang="ts">
import {Component, Emit, Vue} from 'vue-property-decorator';
import SmallPage from './SmallPage.vue';

@Component({components: {SmallPage}})
export default class AccountList extends Vue {
    @Emit()
    // tslint:disable-next-line:no-empty
    private signup() {}

    @Emit()
    // tslint:disable-next-line:no-empty
    private login() {}

    @Emit()
    // tslint:disable-next-line:no-empty
    private ledger() {}
}
</script>

<style scoped>
    /* Nimiq Style */
    .onboarding-menu {
        --nimiq-blue:       #1F2348; /* rgb(31, 35, 72) */
        --nimiq-light-blue: #0582CA; /* rgb(5, 130, 202) */
        --nimiq-green:      #21BCA5; /* rgb(33, 188, 165) */

        --nimiq-blue-bg:       radial-gradient(circle at bottom right, #260133, var(--nimiq-blue));
        --nimiq-light-blue-bg: radial-gradient(circle at bottom right, #265DD7, var(--nimiq-light-blue));
        --nimiq-green-bg:      radial-gradient(circle at bottom right, #41A38E, var(--nimiq-green));
    }

    .nq-h2 {
        font-size: 2.5rem;
        line-height: 1.2;
        font-weight: bold;
        margin: 2.5rem 0;
    }

    .nq-text {
        font-size: 2rem;
        line-height: 1.3125;
        opacity: 0.7;
        margin: 2rem 0;
    }

    .nq-blue-bg {
        background: var(--nimiq-blue);
        background-image: var(--nimiq-blue-bg);
    }

    .nq-light-blue-bg {
        background: var(--nimiq-light-blue);
        background-image: var(--nimiq-light-blue-bg);
    }

    .nq-green-bg {
        background: var(--nimiq-green);
        background-image: var(--nimiq-green-bg);
    }
    /* END Nimiq Style */

    .onboarding-menu {
        max-width: unset;
        min-height: unset;
        width: 86.5rem;
        height: 29rem;
        padding: 0.75rem;
        position: relative;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        z-index: 0;
    }

    .choice,
    .choice.login:hover ~ .choice.signup,
    .choice.login:focus ~ .choice.signup,
    .choice.ledger:hover ~ .choice.signup,
    .choice.ledger:focus ~ .choice.signup {
        width: 33.33%;
        height: 100%;
        background: none;
        border: none;
        outline: none;
        font-size: inherit;
        font-family: inherit;
        padding: 4rem;
        transition: color 500ms;
        cursor: pointer;
        text-align: left;
        z-index: 200;
        position: relative;
        color: inherit;
    }

    .choice svg,
    .choice.login:hover ~ .choice.signup svg,
    .choice.login:focus ~ .choice.signup svg,
    .choice.ledger:hover ~ .choice.signup svg,
    .choice.ledger:focus ~ .choice.signup svg {
        opacity: 0.2;
        transition: opacity 500ms;
    }

    .choice.signup,
    .choice:hover,
    .choice:focus {
        color: white;
    }

    .choice.signup svg,
    .choice:hover svg,
    .choice:focus svg {
        opacity: 1;
    }

    .choice.signup::after,
    .choice.login::after,
    .choice.ledger:hover ~ .choice.signup::after,
    .choice.ledger:focus ~ .choice.signup::after {
        content: '';
        display: block;
        position: absolute;
        right: -1px;
        top: 2rem;
        width: 2px;
        border-radius: 2px;
        height: calc(100% - 4rem);
        background: var(--nimiq-blue);
        opacity: 0.1;
        transition: opacity 500ms;
    }

    .choice.signup::after,
    .choice.login:hover::after,
    .choice.login:focus::after,
    .choice.ledger:hover ~ .choice.login::after,
    .choice.ledger:focus ~ .choice.login::after {
        opacity: 0;
    }

    .nq-h2 {
        margin-top: 4.25rem;
        margin-bottom: 1.25rem;
    }

    .nq-text {
        opacity: 1;
        margin: 0;
    }

    .background-container {
        position: absolute;
        left: 0.75rem;
        top: 0.75rem;
        transform: translate3d(0, 0, 0);
        transition: transform 500ms;
        z-index: 100;
        width: calc((100% - 1.5rem) / 3);
        height: calc(100% - 1.5rem);
    }

    .background {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        transition: opacity 500ms;
    }

    .background.login,
    .background.ledger {
        opacity: 0;
    }

    .choice.login:hover ~ .background-container,
    .choice.login:focus ~ .background-container {
        transform: translate3d(100%, 0, 0);
    }

    .choice.ledger:hover ~ .background-container,
    .choice.ledger:focus ~ .background-container {
        transform: translate3d(200%, 0, 0);
    }

    .choice.login:hover ~ .background-container .background.login,
    .choice.login:focus ~ .background-container .background.login {
        opacity: 1;
    }

    .choice.ledger:hover ~ .background-container .background.ledger,
    .choice.ledger:focus ~ .background-container .background.ledger {
        opacity: 1;
    }
</style>
