<script>
import axios from 'axios';
import { store } from '../store';
import AppCard from './AppCard.vue';

export default {
    data() {
        return {
          store,
        };
    },
    methods: {

    },
    components: {
        AppCard,
    },
}
</script>

<template>
    <AppCard/>
</template>

<style lang="scss" scoped>
</style>
