<template>
<div class="finance">
    <plugin v-for="(item, key, index) in pluginList"
     :key="index"
     :disabled-plugin="getCategoryPluginStates.disabled.toString() === key ? true : false" 
     :plugin-title="item.title" 
     :plugin-description="item.description" />
</div>
</template>

<script>
import Plugin from '@/components/Plugin.vue'

export default {
    name: 'Finance',
    components: {
        Plugin
    },
    data() {
        return {
            disablePlugin: false
        }
    },
    props: {
      pluginList:{
        type: Object,
        required: true,
        default: null
      },
       tabData:{
        type: Object,
        required: true,
        default: null
      }
    },
      mounted() {
      this.getUrlPath()
    },
    computed: {
      getCategoryPluginStates: function() {
          return this.tabData[this.getUrlPath()]
      }

    },
    methods: {
        getUrlPath () {
          if(window.location.pathname==='/marketing') {
              return 'tab1'
          }else if(window.location.pathname==='/finance') {
              return 'tab2'
          }
          else if(window.location.pathname==='/personnel') {
              return 'tab3'
          }
        }
    }
}
</script>

<style lang="scss" scoped>
.finance {
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
