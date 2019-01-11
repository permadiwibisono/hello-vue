new Vue({
  el: "#app",
  data: {
    greeting: "Hello World!",
    alertMessage: "",
    user: "Permadi Wibisono",
    city: "Indonesia",
    cityImgUrl: 'https://bit.ly/2SKJPqJ'
  },
  methods: {
    alertMessageKeyUp(ev) {
      console.log("Event ", ev);
      this.alertMessage = "You typed something!";
    },
    alertMessageKeyUpEnter(ev) {
      console.log("Event ", ev.target.value);
      this.alertMessage = ev.target.value;
    },
    changeGreeting(ev) {
      console.log("Event ", ev);
      this.greeting = this.greeting === 'Hello World!' ?
      'What is up!' :
      'Hello World!';
    }
  }
})