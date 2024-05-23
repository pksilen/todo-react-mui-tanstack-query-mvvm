import { IconButton } from 'app/common/components/buttons/IconButton';
import { EditIcon, RemoveIcon } from 'app/common/components/icons/Icons';
import { Checkbox } from 'app/common/components/inputs/Checkbox';
import { EditTextInput } from 'app/common/components/inputs/EditTextInput';
import { TableCell } from 'app/common/components/table/TableCell';
import { TableRow } from 'app/common/components/table/TableRow';
import { Todo } from 'app/model/Todo';
import classNames from 'classnames';
import { useTodoViewModel } from './model/useTodoViewModel';
import classes from './TodoTableRow.module.scss';

type Props = {
  readonly todo: Todo;
};

export const TodoTableRow = ({ todo: { id, title, isDone } }: Props) => {
  const vm = useTodoViewModel(id);

  const titleClasses = classNames(classes.title, isDone && classes.isDone);

  return (
    <TableRow>
      <TableCell>
        <Checkbox
          aria-label={title}
          isChecked={isDone}
          color="success"
          onChange={vm.toggleDoneMutation.mutate}
        />
      </TableCell>
      {vm.isEditable ? (
        <TableCell>
          <EditTextInput onEditComplete={vm.editMutation.mutate} text={title} />
        </TableCell>
      ) : (
        <TableCell className={titleClasses} onDoubleClick={() => vm.setIsEditable(true)}>
          {title}
        </TableCell>
      )}
      <TableCell className={classes.buttons}>
        <IconButton icon={<EditIcon />} onClick={() => vm.setIsEditable(true)} />
        <IconButton icon={<RemoveIcon />} onClick={vm.removeMutation.mutate} />
      </TableCell>
    </TableRow>
  );
};
