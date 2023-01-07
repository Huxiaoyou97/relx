---
title: '面向Vue3.0UI库'
lang: zh-CN
page: true
---

<script setup>

if (typeof window !== 'undefined') {
  const preferredLang = localStorage.getItem('preferred_lang') || 'zh-CN';
  window.location.pathname = `/${preferredLang}/`
}

</script>
