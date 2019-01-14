/**
 * Description of FilterItems.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 08.09.18 12:06
 */

export const positionsFilters = [{
  name: 'priority',
  title: 'Приоритет',
  isCollapsed: false,
  showAll: false,
  selected: [],
  items: [{
    id: 1,
    name: 'Горячая вакансия',
  }, {
    id: 2,
    name: 'Обычная вакансия',
  }, {
    id: 3,
    name: 'Низкий приоритет',
  }],
}, {
  name: 'stack',
  title: 'Основной стэк',
  isCollapsed: true,
  showAll: false,
  selected: [],
  items: [{
    id: 1,
    name: 'Django',
  }, {
    id: 2,
    name: 'Javascript',
  }, {
    id: 3,
    name: 'Python',
  }, {
    id: 4,
    name: 'Php',
  }],
}]
