<template>
  <div class="rx-loading">
    <div class="rx-loading__content" :class="[loading ? 'rx-loading__content--active' : null]" v-if="$slots.default">
      <slot />
    </div>
    <div class="rx--box rx-loading__body" :class="[$slots.default ? 'rx-loading__inside' : null]" v-if="isShow">
      <div class="rx-loading__circle" v-if="type === 'circle'">
        <span
          class="rx-loading__circle-block"
          :style="{
            width: getRadius * 2 + 'px',
            height: getRadius * 2 + 'px',
            color,
          }"
        >
          <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none"></circle>
          </svg>
        </span>
      </div>

      <template v-for="(nums, key) in loadingTypeDict" :key="key">
        <div :class="`rx-loading__${key} rx-loading__${key}-${size}`" v-if="type === key">
          <div
            v-for="num in nums"
            :key="num + key"
            :style="{ backgroundColor: color }"
            :class="`rx-loading__${key}-item rx-loading__${key}-item-${size}`"
          ></div>
        </div>
      </template>
      <div
        class="rx-loading__description"
        :class="`rx-loading__description--${size}`"
        :style="{ color }"
        v-if="$slots.description || description"
      >
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { props } from './props'
import { toNumber } from '../utils/shared'
import type { ComputedRef } from 'vue'

export default defineComponent({
  name: 'RxLoading',
  props,
  setup(props, { slots }) {
    const loadingTypeDict = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3,
    }

    const sizeDict = {
      mini: 9,
      small: 12,
      normal: 15,
      large: 18,
    }

    const getRadius: ComputedRef<number> = computed(() => {
      return props.radius ? toNumber(props.radius) : sizeDict[props.size]
    })

    const isShow: ComputedRef<boolean> = computed(() => {
      if (!slots.default?.()) return true

      return props.loading
    })

    return {
      loadingTypeDict,
      getRadius,
      isShow,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './loading';
</style>
