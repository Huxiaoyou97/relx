<template>
    <ul>
        <li
            v-for="color in ['primary', 'info', 'success', 'warning', 'error']"
            :key="color"
            v-ripple="{ class: `${color}--text` }"
        >
            <span>Item with "{{ color }}" class</span>
        </li>
    </ul>
</template>
