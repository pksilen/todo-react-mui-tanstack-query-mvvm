import { IconOrButton } from 'app/common/components/buttons/IconOrButton';
import { CheckIcon, EditIcon, RemoveIcon, TodoIcon } from 'app/common/components/icons/Icons';
import { EditTextInput } from 'app/common/components/inputs/EditTextInput';
import { ListItem } from 'app/common/components/list/ListItem';
import { ListItemIcon } from 'app/common/components/list/ListItemIcon';
import { ListItemText } from 'app/common/components/list/ListItemText';
import { Todo } from 'app/model/Todo';
import classNames from 'classnames';
import { useTodoViewModel } from './model/useTodoViewModel';
import classes from './TodoListItem.module.scss';

type Props = {
  readonly todo: Todo;
};

export const TodoListItem = ({ todo: { id, title, isDone } }: Props) => {
  const vm = useTodoViewModel(id);

  const titleClasses = classNames(classes.title, isDone && classes.isDone);

  return (
    <ListItem className={classes.todo}>
      <ListItemIcon icon={<TodoIcon color={isDone ? 'success' : 'error'} />} />
      {vm.isEditable ? (
        <EditTextInput
          aria-label="Edit todo"
          onEditComplete={vm.changeTitleMutation.mutate}
          text={title}
        />
      ) : (
        <ListItemText
          className={titleClasses}
          onDoubleClick={() => vm.setIsEditable(true)}
          text={title}
        />
      )}
      <div className={classes.buttons}>
        <IconOrButton
          icon={<CheckIcon />}
          onClick={vm.toggleDoneMutation.mutate}
          text={isDone ? 'Mark undone' : 'Mark done'}
        />
        <IconOrButton icon={<EditIcon />} onClick={() => vm.setIsEditable(true)} text="Edit" />
        <IconOrButton icon={<RemoveIcon />} onClick={vm.removeMutation.mutate} text="Remove" />
      </div>
    </ListItem>
  );
};
