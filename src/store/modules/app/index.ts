import { defineStore } from 'pinia';
import piniaStore from '@/store/index';
import { AppState } from './types';

export const useAppStore = defineStore(
  // 唯一ID
  'app',
  {
    state: () => ({
      title: 'FastVue3, 一个快速开箱即用的Vue3+Vite模板',
      h1: 'Vue3 + Vite3.x + TypeScript + Pinia大厂开发必备',
      theme: '',
    }),
    getters: {},
    actions: {
      updateSettings(partial: Partial<AppState>) {
        this.$patch(partial);
      },

      // Change theme color
      toggleTheme(dark: boolean) {
        if (dark) {
          this.theme = 'dark';
          document.documentElement.classList.add('dark');
        } else {
          this.theme = 'light';
          document.documentElement.classList.remove('dark');
        }
      },
    },
    persist: {
      key: 'theme', // 持久化的数据存储在localStorage中的key
      storage: localStorage, // 数据存储在localStorage中(默认)
      paths: ['theme'], // 哪些数据需要被持久化存储
    },
  },
);

export function useAppOutsideStore() {
  return useAppStore(piniaStore);
}
