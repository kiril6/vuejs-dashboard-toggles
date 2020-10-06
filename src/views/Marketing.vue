<template>
<div class="marketing">{{availablePlugins(1)}}
    <plugin v-for="(item, key, index) in pluginList"
     :key="index"
     :active="getCategoryPluginStates.active[index] === key ? true : false"
     :inactive="getCategoryPluginStates.inactive[index] === key ? true : false" 
     :disabled-plugin="getCategoryPluginStates.disabled.toString() === key ? true : false" 
     :plugin-title="item.title" 
     :plugin-description="item.description"
     style="display:none"
      :style="availablePlugins(index) === key ? 'display: block;' : ''"
      />
</div>
</template>

<script>
import Plugin from '@/components/Plugin.vue'
// import { EventBus } from '@/event-bus'

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
      this.availablePlugins()
      // console.log(this.activeUsers)
    },
    computed: {
      getCategoryPluginStates: function() {
          return this.tabData[this.getUrlPath()]
      },

      // activeUsers: function() {
      //  return this.pluginList.filter(function(u) {
      //    return u.availablePlugins()
      //  })
      // }

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
        },
        availablePlugins (index){
          
          let combinedArray = []
          combinedArray.push(...this.tabData[this.getUrlPath()].active, ...this.tabData[this.getUrlPath()].inactive, ...this.tabData[this.getUrlPath()].disabled)

          return combinedArray[index]
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
