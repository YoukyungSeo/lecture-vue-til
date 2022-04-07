<template>
  <div>
    <!-- 비즈니스 로직을 직접 넣는 것 지양-->
    <SignupForm></SignupForm>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
export default {
  components: {
    SignupForm,
  },
};
</script>

<style></style>
