<template>
<div class="sideMenu" :class="{ disabled: this.MasterEnabled}">

    <div class="sideMenu__logo">
        <router-link to="/">{{logoPart1}}<span>{{logoPart2}}</span></router-link>
    </div>

    <ul class="sideMenu__nav-items">

        <router-link tag="li" :to="'/'+item.title.toLowerCase()" router-link-active v-for="(item, index) in tabNumber" :key="index">

            <template v-if="item.icon.includes('marketing')">
                <grid-dots-icon />
            </template>

            <template v-if="item.icon.includes('finance')">
                <circle-square-icon />
            </template>

            <template v-if="item.icon.includes('people')">
                <clipboard-check-icon />
            </template>

            {{item.title}}

        </router-link>
    </ul>

    <div class="sideMenu__master-toggle">
        {{masterToggleTitle}} {{masterToggleStatus}}
        <toggle-button :value="!this.MasterEnabled" :color="{ checked: '#5BC88D', unchecked: '#C63040', disabled: '#CCCCCC' }" :sync="false" :labels="false" :width="46" :height="30" @change="onChangeToggle()" />
    </div>

</div>
</template>

<script>
import { EventBus } from '@/event-bus'
export default {
    name: 'SideMenu',
    data() {
        return {
            logoPart1: 'Data',
            logoPart2: 'Guard',
            tab2Title: 'Finance',
            tab3Title: 'Personnel',
            masterToggleTitle: 'All plugins ',
            masterToggleStatus: 'enabled'
        }
    },
    methods: {
      onChangeToggle() {
        EventBus.$emit('master-switch-clicked');
          // this.MasterEnabled = !this.MasterEnabled

          this.MasterEnabled= !this.MasterEnabled
          console.log(this.MasterEnabled)
          return this.MasterEnabled ? this.masterToggleStatus = 'disabled' : this.masterToggleStatus = 'enabled'
        }
    },
    props: {
        tabNumber: {
            type: Object,
            default () {
                return []
            }
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "@/assets/styles/color.scss";

.sideMenu {
    position: relative;
    min-height: 689px;
    height: 100vh;
    width: 250px;
    background: linear-gradient(360deg, rgba(91, 200, 141, 0.6) 0%, rgba(255, 255, 255, 0) 9.51%), #F1F1F1;

    &.disabled {
        background: linear-gradient(360deg, rgba(198, 48, 64, 0.6) 0%, rgba(255, 255, 255, 0) 9.51%), #F1F1F1;
    }

    &__logo {
        padding: 29px 81px 36px 32px;
        font-size: 21px;
        font-weight: 500;

        span {
            font-weight: bolder;
        }

        a:link,
        a:hover,
        a:visited,
        a:active {
            color: $dgDark;
            text-decoration: none;
        }
    }

    &__nav-items {

        list-style: none;
        margin: 0;
        padding-inline-start: 0;

        li {
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            height: 48px;
            display: flex;
            align-items: center;
            border-left: 4px solid transparent;
            padding-left: 20px;

            &:hover {
                background-color: $white;
                border-left: 4px solid $dgRed;
                cursor: pointer;
            }

            &.router-link-active {
                background-color: $white;
                border-left: 4px solid $dgRed;
            }

            svg {
                padding-right: 11px;
            }

            a:link,
            a:hover,
            a:visited,
            a:active {
                color: $black;
                text-decoration: none;
            }
        }

    }

    &__master-toggle {
        position: absolute;
        bottom: 25px;
        display: flex;
        justify-content: space-around;
        width: 250px;
        font-size: 13px;
        line-height: 16px;
        color: $dgDark;
        display: flex;
        align-items: center;
    }
}
</style>
