import { Badge } from 'app/common/components/badges/Badge';
import { SearchInput } from 'app/common/components/inputs/SearchInput';
import { Heading2 } from 'app/common/components/typography/Heading2';
import classes from './Header.module.scss';
import { useHeaderViewModel } from './model/useHeaderViewModel';

export const Header = () => {
  const vm = useHeaderViewModel();

  return (
    <header className={classes.todosHeader}>
      <Badge content={vm.undoneTodoCount} color="error">
        <Heading2>Todos</Heading2>
      </Badge>
      <SearchInput
        className={classes.todoSearch}
        onChange={vm.setTodoFilterText}
        placeholder="Search todos..."
      />
    </header>
  );
};
