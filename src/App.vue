<template>
  <div class="container">
    <el-input class="input_keyword" v-model="input" placeholder="Please input keywords to search" />

    <div v-if="totalMatches !== null">
      Total Matches: {{ totalMatches }}
    </div>

    <div class="articles" v-for="item in articles">
      <div class="article-title"> {{ item.title }} </div>
      <div class="article-date"> {{ item.date }} </div>
      <div class="article-des"> {{ item.des }} </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { FilterArticles } from "./helper/helper.filter-articles";
import type { TArticles } from "./utils/types/constant";

// input states
const input = ref('')

// articles state
const articles = ref<TArticles | any>([])
const totalMatches = ref<number | null>(null)

// This watch over input state to filter articles 
watch(input, (value) => {
  if (!value) {
    articles.value = []
    totalMatches.value = null
    return
  }

  const response = FilterArticles(value)
  articles.value = response
  totalMatches.value = response.length
})

</script>
<style src="@/assets/css/app.css" />