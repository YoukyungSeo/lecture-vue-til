<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <div v-if="isLoading">
        Loading...
      </div>
      <ul>
        <post-list-item
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        ></post-list-item>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index';
import PostListItem from '@/components/posts/PostListItem.vue';
export default {
  components: {
    PostListItem,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
