new Vue({
  el: "#app",
  data: {
    message: "Hello World!"
  },
  methods: {
    reverseString(str){
      return str.split('').reverse().join('');
    }
  }
})