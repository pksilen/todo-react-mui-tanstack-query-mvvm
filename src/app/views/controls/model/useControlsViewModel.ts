import { useContext } from 'react';
import { ControlsContext, ViewMode, ViewType } from '../../../model/contexts/ControlsContext';

export const useControlsViewModel = () => {
  const [, dispatch] = useContext(ControlsContext);

  return {
    setViewMode: (viewMode: ViewMode) => dispatch({ type: 'SET_VIEW_MODE', payload: viewMode }),
    setViewType: (viewType: ViewType) => dispatch({ type: 'SET_VIEW_TYPE', payload: viewType }),
    toggleShouldShowUndoTodosOnly: () => dispatch({ type: 'TOGGLE_SHOULD_SHOW_UNDONE_TODOS_ONLY' })
  };
};
