<template>
  <div class="left-block">
      <div class="inner-container">
        <img src="../assets/images/logo.svg" alt="logo" class="logo">
        <img src="../assets/images/hero-mobile.jpg" alt="mobile-picture" class="mobile-picture">
        <h1><span>We're</span><br> coming <br> soon</h1>
        <p>Hello fellow shoppers! We're currently building our new fashion store. 
          Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
      </div>
      <form id="form">
        <input type="text" id="email" placeholder="Email Address">
        <img src="../assets/images/icon-error.svg" alt="error-icon" class="error-icon" style="display: none;">
        <button type="submit">
          <img src="../assets/images/icon-arrow.svg" alt="arrow-icon" class="arrow-icon">
          <small>Please provide a valid email</small>
        </button>
      </form>
    </div>
</template>

<script>
export default {
    name: 'LeftBlock',
}
</script>

<style>

</style>