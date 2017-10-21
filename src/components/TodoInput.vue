<template>
  <div>
    <input
      v-model="todo"
      @keyup.enter="addTodo($event)"
      type="text"
      placeholder="할 일을 입력해 보세요"
    />
    <p>입력하신 할 일은 다음과 같습니다: {{ todo }}</p>
    <button @click="addTodo(todo)">버튼클릭</button>
  </div>
</template>

<script>
  const data = {
    todo: '',
  };

  export default {
    name: 'TodoInput',
    props: ['addTodo'],
    data: () => data,
  };
</script>