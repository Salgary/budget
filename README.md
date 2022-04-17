> ## Budget service.

- Подсчет бюджета
- Введите сумму дохода/расхода и комментарий

---

| Fails in src\    |                  Comment                   |
| :-----------:    | :---------------------------------------:  |
| modules\data.js  |Хранилище данных + getters,actions,mutations|
| store\index.js   |  Импорт data.js и экспорт new store        |
| BudgetList.vue   |Отображение BudgetListItem, удаление позиции|
|BudgetListItem.vue|  Разметка списка из data                   |
| Form.vue         |  Заполнение формы, добавление новой позиции|
| TotalBalance.vue |  Подсчет баланса props:total               |
| App.vue          |  Основной файл проекта                     |
