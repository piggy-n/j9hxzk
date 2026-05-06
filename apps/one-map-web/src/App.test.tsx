import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('renders the workspace heading and shared package message', () => {
    const wrapper = mount(App);

    expect(wrapper.text()).toContain('Vue3 + TSX');
    expect(wrapper.text()).toContain('Hello from map-core');
  });
});
