<template>
  <main style="font-family: system-ui, sans-serif; padding: 2rem;">
    <h1>Electron + Vite + Vue (SPA)</h1>
    <p>これは単一ウィンドウで動くVueアプリです。</p>
    <button @click="doPing">Ping!</button>
    <p v-if="msg">応答: {{ msg }}</p>

    <hr style="margin: 2rem 0" />

    <nav style="display: flex; gap: 1rem;">
      <a href="#" @click.prevent="route = 'home'">Home</a>
      <a href="#" @click.prevent="route = 'settings'">Settings</a>
    </nav>

    <section v-if="route === 'home'">
      <h2>Home</h2>
      <p>ここにホーム画面の内容。</p>
    </section>

    <section v-else>
      <h2>Settings</h2>
      <label>Theme:
        <select v-model="theme">
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
      </label>
      <p style="margin-top: .5rem;">選択: {{ theme }}</p>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const msg = ref('');
const route = ref('home');   // 超シンプルな疑似ルーティング（実務では vue-router 推奨）
const theme = ref('light');

async function doPing() {
  msg.value = await window.api.ping();
}
</script>
