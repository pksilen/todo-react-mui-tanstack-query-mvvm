import { Button } from '@mui/material';
import { TextInput } from 'app/common/components/inputs/TextInput';
import classes from './AddTodo.module.scss';
import { useAddTodoViewModel } from './model/useAddTodoViewModel';

export const AddTodo = () => {
  const vm = useAddTodoViewModel();

  return (
    <section className={classes.addTodo}>
      <TextInput
        label="Add new todo..."
        onChange={(event) => vm.setTodoTitle(event.target.value)}
        value={vm.todoTitle}
      />
      <Button className={classes.button} onClick={vm.maybeAddTodo}>
        Add todo
      </Button>
    </section>
  );
};
