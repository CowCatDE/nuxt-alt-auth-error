<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup>


const $auth = useAuth()
onBeforeMount(()=>{
  userLogin()
})
async function userLogin() {
  try {
    const response = await $auth.loginWith('discord')
    console.log(response)
  } catch (err) {
    console.log(err)
  }
}
</script>
