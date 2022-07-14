import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이어야 한다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test@abc.com',
        };
      },
    });
    const idInput = wrapper.find('#username');
    console.log(idInput.element.value);
    console.log(wrapper.vm.isUsernameValid);
  });
});
