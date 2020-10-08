<template>
<div id="app">

    <div v-if="this.loading">
        <div class="holder">
            <div class="holder__loader"></div>
        </div>
    </div>
    <template v-else>
        <nav>
            <SideMenu :tab-number="this.renderTabs()" />
        </nav>
        <div class="holder">
            <div class="holder__nav-title">
                {{this.routeActiveTitle ? routeActiveTitle : homeTitle }}
            </div>
            <div class="holder__plugins-holder">
                <router-view :pluginList="this.renderPlugins()" :tabData="this.renderTabs()" />
            </div>
        </div>
    </template>

</div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'
export default {

    name: 'App',
    data() {
        return {
            homeTitle: 'Please select a category from navigation menu',
            routeActiveTitle: '',
            dataObject: Object,
            loading: true
        }
    },
    components: {
        SideMenu
    },
    mounted() {
        if (window.location.pathname !== '/') {
            this.$router.push('/');
        }

        this.axios.get('https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json')
            .then(response => this.dataObject = response.data)
            .catch(function (error) {
                console.log(error);
            }).finally(() => this.loading = false);
    },
    methods: {
        renderTabs: function () {
            return this.dataObject.data.tabdata
        },

        renderPlugins: function () {
            return this.dataObject.data.plugins
        }
    },
    watch: {
        '$route'(to, from) {
            if (to !== from) {
                return to.name === null ? this.routeActiveTitle = '' : this.routeActiveTitle = to.name + ' Plugins'
            }
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/styles/color.scss";

body {
    margin: 0;
    height: 100%;
    width: 100%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: row;
}

.holder {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &__loader {
        border: 16px solid #f3f3f3;
        /* Light grey */
        border-top: 16px solid #3498db;
        /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        position: fixed;
        top: 50px;
        left: 50px;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    &__nav-title {
        display: flex;
        align-items: center;
        height: 86px;
        color: $dgDark;
        font-size: 16px;
        line-height: 20px;
        padding-left: 40px;
    }

    &__plugins-holder {
        padding: 0 40px;
    }
}
</style>
