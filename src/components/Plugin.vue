<template>
<div class="plugin" :class="{disabled: $pluginLocker.locked || disabledPlugin}">
    <div class="plugin__header">
        <div class="plugin__header-title">
            {{pluginTitle}}
        </div>
        <div class="plugin__header-toggle" :class="[$pluginLocker.locked || active || inactive ? 'active' : 'blocked']">
            <toggle-button :value="toggleValue || active || inactive" :disabled="$pluginLocker.locked || disabledPlugin" :color="{ checked: '#5BC88D', unchecked: '#C63040'}" :width="36" :height="20" @change="onChangeToggle" />
            <span></span>
        </div>
    </div>
    <div class="plugin__description">
        {{pluginDescription}}
    </div>

</div>
</template>

<script>
export default {
    name: 'Plugin',
    data() {
        return {
            isDisabled: false,
            toggleValue: false
        }
    },
    methods: {
        onChangeToggle() {
            this.toggleValue = !this.toggleValue
        }
    },
    props: {
        active: Boolean,
        inactive: Boolean,

        disabledPlugin: {
            type: Boolean,
            required: true,
            default: false
        },

        pluginTitle: {
            type: String,
            required: true,
            default: 'no title'
        },
        pluginDescription: {
            type: String,
            required: true,
            default: 'missing description'
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/color.scss";

.plugin {
    max-width: 260px;
    min-height: 161px;
    border-radius: 8px;
    border: 2px solid $borderGray;
    padding: 20px;
    margin-bottom: 30px;

    &.disabled {
        opacity: 0.5;
        pointer-events: none;
    }

    &__header {
        display: flex;
        justify-content: space-between;

        &-title {
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
            color: $dgDark;
        }

        &-toggle {
            display: flex;
            flex-direction: column;
            align-items: center;

            span {
                margin-top: 5px;
                font-size: 10px;
                font-weight: 700;
            }

            &.active {
                span {
                    color: $dgGreen;

                    &:before {
                        content: 'Allowed';
                    }
                }
            }

            &.blocked {
                span {
                    color: $dgRed;

                    &:before {
                        content: 'Blocked';
                    }
                }
            }
        }

    }

    &__description {
        max-width: 182px;
        margin-top: 7px;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: $dgGray;
    }
}
</style>
