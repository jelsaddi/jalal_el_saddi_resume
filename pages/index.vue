<template>
  <section>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Resume Jalal</span>
        <span class="d-none d-lg-block">
          <img
            class="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="/profile.png"
            alt=""
          />
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav">
  <li class="nav-item">
    <a
      class="nav-link js-scroll-trigger"
      href="#about"
      @click.prevent="jumpTo('#about')"
    >
      {{ $t('links.about') }}
    </a>
  </li>
  <li class="nav-item">
    <a
      class="nav-link js-scroll-trigger"
      href="#education"
      @click.prevent="jumpTo('#education')"
    >
      {{ $t('links.education') }}
    </a>
  </li>
  <li class="nav-item">
    <a
      class="nav-link js-scroll-trigger"
      href="#experience"
      @click.prevent="jumpTo('#experience')"
    >
      {{ $t('links.experience') }}
    </a>
  </li>
  <li class="nav-item">
    <a
      class="nav-link js-scroll-trigger"
      href="#skills"
      @click.prevent="jumpTo('#skills')"
    >
      {{ $t('links.skills') }}
    </a>
  </li>
  <li class="nav-item">
    <a
      class="nav-link js-scroll-trigger"
      href="#interests"
      @click.prevent="jumpTo('#interests')"
    >
      {{ $t('links.interests') }}
    </a>
  </li>

  <li class="nav-item">
    <div style="position:fixed; bottom:10px; left:10px; z-index:1000;">
      <DarkModeBtn />
    </div>
  </li>

  <li class="nav-item">
    <div style="position:fixed; bottom:10px; right: 10px; z-index:1000;">
      <nuxt-link class="btn btn-light" :to="switchLocalePath('en')">EN</nuxt-link>
      <nuxt-link class="btn btn-light" :to="switchLocalePath('de')">DE</nuxt-link>
    </div>
  </li>
</ul>

      </div>
    </nav>

    <div class="resume">
      <Resume />
    </div>
  </section>
</template>

<script>
import Resume from "@/components/Resume";
import DarkModeBtn from "@/components/DarkModeBtn";
import jump from "jump.js";

export default {
  components: {
    Resume,
    DarkModeBtn
  },
  head() {
    return {
      title: "Jalal El Saddi"
    };
  },
  methods: {
    jumpTo(element) {
      const target = document.querySelector(element);
      if (target) {
        jump(target, {
          offset: -70,   // adjust for fixed navbar height
          duration: 600  // smooth scrolling
        });
      }
    }
  }
};
</script>


<style scoped>
h1 {
  font-size: 3rem;
  line-height: 5.5rem;
}
@media (min-width: 992px) {
  .resume {
    padding-top: 0;
    padding-left: 17rem;
  }
}
</style>
