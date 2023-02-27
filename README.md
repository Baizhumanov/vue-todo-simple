# vue-todo-simple

Простой ToDo-проект, сделанный исключительно для резюме, чтобы было представления о написания кода. Данный ToDo сделан только на Vue. Его backend часть (вероятно на Node) будет находиться в другом репозиторий. Данное разделение важно, так как является основой микросервисной архитектуры.

Используемый стэк:
1. Vue `3.0.0`
2. Bootstrap `5.2.3`

Vuex и Vue Router не были использованы, так как весь функционал можно поместить в одну страницу

В папке `pages` находятся страницы (в данном случае страница MainPage). В папке `components` находятся компоненты (при желаний можно расширить ее и с папкой `UI`)

ToDo компонент хранит следующие данные:
```
export default {
  ...
  data() {
    return {
      items: [],
      text: "",
    }
  },
  ...
}
```

И следующие методы, которые позволяют добавлять, удалять и изменять статус задачи:
```
export default {
  ...
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
  ...
}
```

Вывод каждой задачи выполняется через директиву `v-for`:
```
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
```

P.S. Повторюсь, данный мини-проект исключительно для того, чтобы показать, что имеются знания во Vue. Параллельно к этому веду и другой более масштабный проект с Vuex и навигацией, код которого так же готов предоставить 
