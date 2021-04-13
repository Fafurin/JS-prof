Vue.component('search', {
  template: `
            <form class="search-box__field" action="#">
              <input v-model = "$root.userSearch" class="search-box__input" type="text" placeholder="Search for item...">
              <button type="submit" class="search-box__submit"></button>
            </form>
            `
})