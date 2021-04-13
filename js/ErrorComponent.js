Vue.component ('error', {
  props: ['visibility'],
  template: `
            <div class="error" v-if="visibility">
              <h1 class="error__title">404</h1>
              <p class="error__text">Не удается получить список товаров. Нет доступа к серверу</p>
            </div>
            `
})