import { useQuery } from '@tanstack/react-query';
import { ControlsContext } from 'app/contexts/ControlsContext';
import todoService from 'app/services/FakeTodoService';
import { useContext } from 'react';

export const useHeaderViewModel = () => {
  const [, dispatch] = useContext(ControlsContext);

  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: todoService.getTodos
  });

  const undoneTodoCount = todos?.filter(({ isDone }) => !isDone).length;

  return {
    setTodoFilterText: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({
        type: 'SET_TODO_FILTER_TEXT',
        payload: event.target.value
      }),

    undoneTodoCount
  };
};
