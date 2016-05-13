new Vue({
  el: '#editor',
  data: {
    input: '# Please edit in here'
  },
  filters: {
    marked: marked
  }
})