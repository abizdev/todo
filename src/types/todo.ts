export type Todo = {
  id: Ref<number>,
  title: Ref<string>,
  text: Ref<string>,
  date: Ref<string>
}

export type Todolist =  Todo[]