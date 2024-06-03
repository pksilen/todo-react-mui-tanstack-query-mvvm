import { useMutation, useQueryClient } from '@tanstack/react-query';
import todoService from 'app/services/FakeTodoService';
import { useState } from 'react';

export const useTodoViewModel = (id: string) => {
  const [isEditable, setIsEditable] = useState(false);
  const queryClient = useQueryClient();
  const invalidateTodosQuery = () => queryClient.invalidateQueries({ queryKey: ['todos'] });

  const changeTitleMutation = useMutation({
    mutationFn: (newTitle: string) => todoService.editTodo(id, newTitle),
    onSettled: () => setIsEditable(false),
    onSuccess: invalidateTodosQuery
  });

  const removeMutation = useMutation({
    mutationFn: () => todoService.removeTodo(id),
    onSuccess: invalidateTodosQuery
  });

  const toggleDoneMutation = useMutation({
    mutationFn: () => todoService.toggleTodoDone(id),
    onSuccess: invalidateTodosQuery
  });

  return { changeTitleMutation, isEditable, removeMutation, setIsEditable, toggleDoneMutation };
};
