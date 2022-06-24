<template>
  <div>
    <!-- 비즈니스 로직을 직접 넣는 것 지양-->
    <h1>회원가입 페이지</h1>
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
