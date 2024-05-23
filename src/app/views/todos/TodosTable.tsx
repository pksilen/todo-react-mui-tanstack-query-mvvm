import { Table } from 'app/common/components/table/Table';
import { Todo } from 'app/model/Todo';
import { useTodosViewModel } from './model/useTodosViewModel';
import { PendingTodos } from './PendingTodos';
import { TodoTableRow } from './todo/TodoTableRow';

export const TodosTable = () => {
  const vm = useTodosViewModel();

  return (
    <PendingTodos isPending={vm.isPending}>
      <Table>
        {vm.shownTodos?.map((todo: Todo) => <TodoTableRow key={todo.id} todo={todo} />)}
      </Table>
    </PendingTodos>
  );
};
