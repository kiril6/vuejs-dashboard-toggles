<template>
<div class="marketing">
  <plugin v-for="(item, key, index) in pluginList" :key="index" :active="getCategoryPluginStates.active.indexOf(key)>-1" :inactive="getCategoryPluginStates.inactive.indexOf(key)>-1" :disabled-plugin="getCategoryPluginStates.disabled.indexOf(key)>-1" :availablePlugins="getAvailablePlugins(key)" :plugin-title="item.title" :plugin-description="item.description" />
</div>
</template>

<script>
import Plugin from '@/components/Plugin.vue'

export default {
    name: 'Marketing',
    components: {
        Plugin
    },
    data() {
        return {
            disablePlugin: false
        }
    },
    props: {
        pluginList: {
            type: Object,
            required: true,
            default: null
        },
        tabData: {
            type: Object,
            required: true,
            default: null
        }
    },
    mounted() {
        this.getUrlPath()
    },
    computed: {
        getCategoryPluginStates: function () {
          return this.tabData[this.getUrlPath()]
        }
    },
    methods: {
        getUrlPath() {
            if (window.location.pathname === '/marketing') {
                return 'tab1'
            } else if (window.location.pathname === '/finance') {
                return 'tab2'
            } else if (window.location.pathname === '/personnel') {
                return 'tab3'
            }
        },
          getAvailablePlugins(key) {
            let combinedArray = []
    
            combinedArray.push(...this.tabData[this.getUrlPath()].active, ...this.tabData[this.getUrlPath()].inactive, ...this.tabData[this.getUrlPath()].disabled)
            return combinedArray.indexOf(key)>-1;
        }
    }
}
</script>

<style lang="scss" scoped>
.marketing {
    display: flex;
    flex-wrap: wrap;

    >.plugin {
        width: 27%;
    }

    .plugin:nth-child(1n),
    .plugin:nth-child(2n) {
        margin-right: 30px;
    }
}
</style>
