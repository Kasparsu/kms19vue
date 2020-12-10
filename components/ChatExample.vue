<template>
<div>
  <ul>
    <li v-for="(message,index) in messages">
      <span class="tag is-primary is-light is-large mb-3">{{message}}</span>
    </li>
  </ul>
  <input class="input" type="text" v-model="input">
  <button class="button is-primary" @click="send">Send</button>
</div>
</template>

<script>
export default {
name: "ChatExample",
  mounted() {
    this.socket = new WebSocket('ws://localhost:3000');

    this.socket.addEventListener('open', event => {
        //this.socket.send('Hello Server!');
    });

    this.socket.addEventListener('message', event => {
      console.log('Recieved:' + event.data);

    })
  },
  data() {
    return {
      messages: [],
      input: '',
      socket: null
    }
  },
  methods: {
    send(){
      if(this.input !== '') {
        this.messages.push(this.input);
        this.socket.send(this.input);
        this.input = '';
      }
    }
  }
}
</script>

<style scoped>
  ul {
    height: 700px;
  }
</style>