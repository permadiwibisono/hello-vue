new Vue({
  el: "#app",
  data: {
    greeting: "",
    user: "Permadi Wibisono",
    city: "Indonesia"
  },
  methods: {
    addGreeting() {
      this.greeting = 'Hello World!';
    },
    changeGreeting() {
      this.greeting = this.greeting === 'Hello World!' ?
      'What is up!' :
      'Hello World!';
    }
  }
})