<template>
  <div>
    <input
      v-model="todo"
      @keyup.enter="inputTodo()"
      type="text"
      placeholder="할 일을 입력해 보세요"
    />
    <p>입력하신 할 일은 다음과 같습니다: {{ todo }}</p>
    <button @click="inputTodo()">할일 추가</button>
  </div>
</template>

<script>
  const data = {
    todo: '',
  };

  export default {
    name: 'TodoInput',
    props: {
      addTodo: Function,
    },
    data: () => data,
    methods: {
      inputTodo() {
        const { addTodo } = this.$props;
        addTodo(data.todo);
        data.todo = '';
      },
    },
  };
</script>