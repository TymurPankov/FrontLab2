import { mount } from '@vue/test-utils'
import Game from '@/views/Tic-Tac-Toe.vue'

describe('Testing Game', () => {
  const $router = {
    push: jest.fn()
  }
  const $store = {
    dispatch: jest.fn()
  }
  const wrapper = mount(Game, {
    global: {
      mocks: {
        $router,
        $store
      }
    }
  });

  window.alert = jest.fn();

  it('checks name of game', () => {
      expect(wrapper.element.textContent).toContain("Tic-Tac-Toe");
  });

  it('check mode - pve', async () => {
    await wrapper.find('input[type="radio"]').setValue("pve");
    await wrapper.find('button').trigger('click');
    expect(window.alert).toBeCalledWith('Choosed mode: pve');
  });
})
