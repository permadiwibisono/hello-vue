new Vue({
  el: "#app",
  data: {
    greeting: "Hello World!",
    alertMessage: "",
    user: "Permadi Wibisono",
    city: "Indonesia"
  },
  methods: {
    alertMessageKeyUp() {
      this.alertMessage = "You typed something!";
    },
    alertMessageKeyUpEnter() {
      this.alertMessage = "You typed and pressed Enter!";
    },
    changeGreeting() {
      this.greeting = this.greeting === 'Hello World!' ?
      'What is up!' :
      'Hello World!';
    }
  }
})