import { mount } from '@vue/test-utils'
import Login from '@/views/LoginView.vue'

describe('Login', () => {
  const $router = {
    push: jest.fn()
  }
  const $store = {
    dispatch: jest.fn()
  }
  const wrapper = mount(Login, {
    global: {
      mocks: {
        $router,
        $store
      }
    }
  });

  window.alert = jest.fn();

  it('empty username', async () => {
    await wrapper.find('input[name="username"]').setValue("");
    await wrapper.find('input[name="password"]').setValue("password");
    await wrapper.find('button').trigger('click');
    expect($router.push).toBeCalledTimes(0);
    expect($store.dispatch).toBeCalledTimes(0);
    expect(window.alert).toBeCalledWith('Fields can`t be null');
  });

  it('empty password', async () => {
    await wrapper.find('input[name="username"]').setValue("username");
    await wrapper.find('input[name="password"]').setValue("");
    await wrapper.find('button').trigger('click');
    expect($router.push).toBeCalledTimes(0);
    expect($store.dispatch).toBeCalledTimes(0);
    expect(window.alert).toBeCalledWith('Fields can`t be null');
  });

  it('successfull login', async () => {
    await wrapper.find('input[name="username"]').setValue("admin");
    await wrapper.find('input[name="password"]').setValue("admin");
    await wrapper.find('button').trigger('click');
    expect($router.push).toBeCalledWith("/")
    expect($store.dispatch).toBeCalledWith("LOGIN_USER", { username: "admin", password: "admin" })
  });
})