<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col col-md-6">
        <form @submit.prevent>
          <div class="row g-3">
            <div class="col-12 col-md-8">
              <input type="text" class="form-control" placeholder="Введите задачу..." v-model.trim="text">
            </div>
            <div class="col-12 col-md-4">
              <button type="button" class="btn btn-success" @click="addItem">Добавить</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="row justify-content-center my-5">
      <div class="col col-md-6">
        <ul class="list-group">
          <li class="list-group-item" v-for="item in items" :key="item.id">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <input class="form-check-input me-2" type="checkbox" @change="toggleItemState($event, item.id)">
                <div class="d-inline-block" :class="{ 'text-decoration-line-through' : item.completed }">
                  {{ item.text }}
                </div>
              </div>
                <button type="button" class="btn-close" @click="deleteItem(item.id)"></button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      items: [],
      text: "",
      completedClass: "text-decoration-line-through"
    }
  },
  methods: {
    addItem() {
      if (this.text.length === 0) {
        return
      }
      this.items.push({id: this.items.length + 1, text: this.text, completed: false})
      this.text = ""
    },
    deleteItem(id) {
      this.items.forEach((e, i, a) => {
        if (e.id === id) {
          a.splice(i, 1)
          return
        }
      })
    },
    toggleItemState(event, id) {
      this.items.forEach(e => {
        if (e.id === id) {
          e.completed = event.target.checked
        }
      })
    }
  }
}
</script>

<style scoped>

</style>