import { mount } from '@vue/test-utils'
import About from '@/views/AboutView.vue'

describe('Testing About page has an author name', () => {
  const wrapper = mount(About);
  it('checks textContent to contain "Pankov Tymur"', () => {
      expect(wrapper.element.textContent).toContain("Pankov Tymur");
  });

  it('About image is "Vue logo"', () => {
      const images = wrapper.findAll('img');
      expect(images.length).toBe(1);
      const image = images.at(0);
      expect(image.element.alt).toBe('Vue logo');
  });
})
