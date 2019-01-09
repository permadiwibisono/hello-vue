new Vue({
  el: "#app",
  data: {
    greeting: "Hello World!",
    user: "Permadi Wibisono",
    city: "Indonesia"
  },
  methods: {
    changeGreeting() {
      this.greeting = this.greeting === 'Hello World!' ?
      'What is up!' :
      'Hello World!';
    }
  }
})