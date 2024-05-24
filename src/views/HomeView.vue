<template>
  <div class="home">
    <header>
      <p class="custom-h1">Who am I?</p>

      <WelcomeText
        :textList="['Fullstack Developer', 'AI Enthusiast', 'Lifetime Learner']"
        :writingTime="1500"
        :delay="4000"
      />
      <img
        src="https://media.licdn.com/dms/image/D4D03AQEmR_u5M7QM9g/profile-displayphoto-shrink_800_800/0/1714295249869?e=1721865600&v=beta&t=X--Bgsx1DuAxKkpcfzOKLJemQP_FysXY_6AGofyEiMg"
        alt="Batuğ Koçak"
        class="profile-photo"
      />
    </header>

    <section class="about">
      <p>
        Highly motivated Software Engineering student with a strong foundation
        in front-end and back-end development. Eager to learn and apply my
        skills in a professional environment. Possess a strong work ethic and a
        passion for building user-friendly and secure software solutions.
      </p>
    </section>

    <section class="overview">
      <div class="overview-item">
        <Button>
          <span class="material-symbols-outlined"> alternate_email </span>
          Contact Me
        </Button>
      </div>
      <div class="overview-item">
        <Button :special="true"
          ><span class="material-symbols-outlined" style="color: white">
            assignment </span
          >Download CV</Button
        >
      </div>
    </section>
  </div>
</template>

<script setup>
import WelcomeText from "../components/home/WelcomeText.vue";
import Button from "../components/common/Button.vue";
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

header {
  margin-bottom: 40px;
}

.profile-photo {
  border-radius: 50%;
  max-width: 150px;
  margin-top: 20px;
}

.about {
  margin-bottom: 40px;
}

.overview {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 40px;
}
.overview-item {
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
</style>
