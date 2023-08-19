<template>
  <v-app-bar v-if="isSpacer" class="navbar-toolbar" color="primary">
    <v-row class="navbar-logos">
      <router-link to="/">
        <img
          loading="lazy"
          class="midea-logo"
          src="@/assets/images/Nav/Midea_logo_blue.svg"
          alt="midea-logo"
        />
      </router-link>
      <v-spacer> </v-spacer>
      <img
        class="midea-slogan"
        src="@/assets/images/Nav/Midea_slogan_white.svg"
        alt="slogan"
        loading="lazy"
      />
    </v-row>
    <div bg-color="primary" class="navbar-bottom">
      <div class="tabs">
      <v-tabs bg-color="primary">
        <v-tab :to="item.link" v-for="item in links" :key="item">{{
          item.title
        }}</v-tab>
      </v-tabs>
      </div>
    </div>
  </v-app-bar>
  <v-app-bar color="primary" v-else>
    <v-row class="mobile-nav">
      <router-link to="/">
        <img
          loading="lazy"
          class="midea-logo"
          src="@/assets/images/Nav/Midea_logo_blue.svg"
          alt="midea-logo"
        />
      </router-link>
      <v-btn
        @click="isActiveNav = !isActiveNav"
        icon="mdi-format-list-bulleted"
      >
      </v-btn>
    </v-row>
  </v-app-bar>
  <v-navigation-drawer
    color="primary"
    v-model="isActiveNav"
    location="right"
    temporary
  >
    <v-tabs direction="column" bg-color="primary">
      <v-tab
        :active-class="item.link === $route.path ? 'tab-active' : ''"
        :to="item.link"
        v-for="item in links"
        :key="item"
        >{{ item.title }}</v-tab
      >
    </v-tabs>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      isSpacer: window.innerWidth <= 992 ? false : true,
      links: [
        {
          title: 'ГЛАВНАЯ',
          link: '/',
        },
        {
          title: 'ВОДОНАГРЕВАТЕЛИ',
          link: '/water-heaters',
        },
        {
          title: 'ГАЗОВЫЕ ВОДОНАГРЕВАТЕЛИ',
          link: '/gas-water-heaters',
        },
        {
          title: 'ГАЗОВЫЕ КОТЛЫ ',
          link: '/gas-boilers',
        },
        {
          title: 'ЭЛЕКТРИЧЕСКИЕ КОТЛЫ ',
          link: '/electric-boilers',
        },
        {
          title: 'ПРАЙС ЛИСТ',
          link: '/price-list',
        },
        {
          title: 'КОНТАКТЫ',
          link: '/contacts',
        },
      ],
      isActiveNav: false,
    }
  },
}
</script>
