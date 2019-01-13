new Vue({
  el: "#app",
  data: {
    name: '',
    subject: '',
    subjectList: [
      { label:'Engineering', value: 'Engineering' },
      { label: 'Computer Science', value: 'Computer Science' },
      { label: 'Biology', value: 'Biology' },
      { label: 'Other...', value: 'Other' },
    ],
    gender: 'Male',
    genderList: ['Female', 'Male'],
    termAndConditions: false
  },
  methods: {
    onSubmit(){
      console.log('name: ', this.name);
      console.log('subject: ', this.subject);
      console.log('gender: ', this.gender);
      console.log('termAndConditions: ', this.termAndConditions);
    }
  }
})