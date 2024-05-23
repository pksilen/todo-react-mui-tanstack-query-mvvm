import { useContext } from 'react';
import { ControlsContext } from '../../../model/contexts/ControlsContext';

export const useControlsViewModel = () => {
  const [, dispatch] = useContext(ControlsContext);

  return {
    activateDarkMode: () => dispatch({ type: 'SET_VIEW_MODE', payload: 'dark' }),
    activateLightMode: () => dispatch({ type: 'SET_VIEW_MODE', payload: 'light' }),
    showListView: () => dispatch({ type: 'SET_VIEW_TYPE', payload: 'list' }),
    showTableView: () => dispatch({ type: 'SET_VIEW_TYPE', payload: 'table' }),
    toggleShouldShowUndoTodosOnly: () => dispatch({ type: 'TOGGLE_SHOULD_SHOW_UNDONE_TODOS_ONLY' })
  };
};
