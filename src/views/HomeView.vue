<template>
  <div class="about">
    <WelcomeText
      :textList="['Fullstack Developer', 'AI Enthusiast', 'Lifetime Learner']"
      :writingTime="1500"
      :delay="4000"
    />
    <p>
      Highly motivated Software Engineering student with a strong foundation in
      front-end and back-end development. Eager to learn and apply my skills in
      a professional environment. Possess a strong work ethic and a passion for
      building user-friendly and secure software solutions.
    </p>
  </div>
</template>

<script setup>
import WelcomeText from "../components/home/WelcomeText.vue";
</script>
