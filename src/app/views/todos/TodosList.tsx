import { List } from 'app/common/components/list/List';
import { Todo } from 'app/model/Todo';
import { useTodosViewModel } from './model/useTodosViewModel';
import { PendingTodos } from './PendingTodos';
import { TodoListItem } from './todo/TodoListItem';

export const TodosList = () => {
  const vm = useTodosViewModel();

  return (
    <PendingTodos isPending={vm.isPending}>
      <List>{vm.shownTodos?.map((todo: Todo) => <TodoListItem key={todo.id} todo={todo} />)}</List>
    </PendingTodos>
  );
};
