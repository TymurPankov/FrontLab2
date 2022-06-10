import { mount } from '@vue/test-utils'
import Register from '@/views/RegisterView.vue'

describe('Registration', () => {
  const $router = {
    push: jest.fn()
  }
  const $store = {
    dispatch: jest.fn()
  }
  const wrapper = mount(Register, {
    global: {
      mocks: {
        $router,
        $store
      }
    }
  });

  window.alert = jest.fn();

  it('empty email', async () => {
    await wrapper.find('input[name="email"]').setValue("");
    await wrapper.find('input[name="username"]').setValue("username");
    await wrapper.find('input[name="name"]').setValue("name");
    await wrapper.find('input[name="date"]').setValue("date");
    await wrapper.find('input[name="password"]').setValue("password");
    await wrapper.find('button').trigger('click');
    expect($store.dispatch).toBeCalledTimes(0);
    expect($router.push).toBeCalledTimes(0);
    expect(window.alert).toBeCalledWith('Noone line can`t be null');
  });

  it('empty username', async () => {
    await wrapper.find('input[name="email"]').setValue("email");
    await wrapper.find('input[name="username"]').setValue("");
    await wrapper.find('input[name="name"]').setValue("name");
    await wrapper.find('input[name="date"]').setValue("date");
    await wrapper.find('input[name="password"]').setValue("password");
    await wrapper.find('button').trigger('click');
    expect($store.dispatch).toBeCalledTimes(0);
    expect($router.push).toBeCalledTimes(0);
    expect(window.alert).toBeCalledWith('Noone line can`t be null');
  });

  it('empty name', async () => {
    await wrapper.find('input[name="email"]').setValue("email");
    await wrapper.find('input[name="username"]').setValue("username");
    await wrapper.find('input[name="name"]').setValue("");
    await wrapper.find('input[name="date"]').setValue("date");
    await wrapper.find('input[name="password"]').setValue("password");
    await wrapper.find('button').trigger('click');
    expect($store.dispatch).toBeCalledTimes(0);
    expect($router.push).toBeCalledTimes(0);
    expect(window.alert).toBeCalledWith('Noone line can`t be null');
  });

  it('empty date', async () => {
    await wrapper.find('input[name="email"]').setValue("email");
    await wrapper.find('input[name="username"]').setValue("username");
    await wrapper.find('input[name="name"]').setValue("name");
    await wrapper.find('input[name="date"]').setValue("");
    await wrapper.find('input[name="password"]').setValue("password");
    await wrapper.find('button').trigger('click');
    expect($store.dispatch).toBeCalledTimes(0);
    expect($router.push).toBeCalledTimes(0);
    expect(window.alert).toBeCalledWith('Noone line can`t be null');
  });

  it('empty password', async () => {
    await wrapper.find('input[name="email"]').setValue("email");
    await wrapper.find('input[name="username"]').setValue("username");
    await wrapper.find('input[name="name"]').setValue("name");
    await wrapper.find('input[name="date"]').setValue("date");
    await wrapper.find('input[name="password"]').setValue("");
    await wrapper.find('button').trigger('click');
    expect($store.dispatch).toBeCalledTimes(0);
    expect($router.push).toBeCalledTimes(0);
    expect(window.alert).toBeCalledWith('Noone line can`t be null');
  });
})