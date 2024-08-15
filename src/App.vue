<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { useMessageStore } from './stores/message'
import { storeToRefs } from 'pinia'
const store = useMessageStore()
const { message } = storeToRefs(store)

const route = useRoute()
const router = useRouter()

const pageSize = ref(route.query.pageSize || 2)

watch(pageSize, (newSize) => {
  router.push({ query: { ...route.query, pageSize: newSize } })
})
</script>

<template>
  <div class="text-center font-sans text-gray-700 antialias">
    <header>
      <div id="flashMessage" class="animation-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <div class="wrapper">
        <nav>
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'event-list-view' }"
            >Event</RouterLink
          >
          |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'about' }"
            >About</RouterLink
          >
          |
          <RouterLink :to="{ name: 'student' }">Student</RouterLink>
        </nav>
        <div>
          <label for="pageSize">Page Size:</label>
          <select id="pageSize" v-model="pageSize">
            <option :value="2">2</option>
            <option :value="5">5</option>
            <option :value="10">10</option>
          </select>
        </div>
      </div>
    </header>
    <RouterView />
  </div>
</template>
