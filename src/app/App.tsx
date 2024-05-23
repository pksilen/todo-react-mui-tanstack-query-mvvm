import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useReducer } from 'react';
import classes from './App.module.scss';
import { ControlsContext } from './model/contexts/ControlsContext';
import { controlsInitialState, controlsStateReducer } from './model/contexts/controlsStateReducer';
import { AddTodo } from './views/addtodo/AddTodo';
import { Controls } from './views/controls/Controls';
import { ErrorBoundary } from './views/errorboundary/ErrorBoundary';
import { Header } from './views/header/Header';
import { TodosList } from './views/todos/TodosList';
import { TodosTable } from './views/todos/TodosTable';

const queryClient = new QueryClient();

export default function App() {
  const [controlsState, dispatch] = useReducer(controlsStateReducer, controlsInitialState);

  return (
    <QueryClientProvider client={queryClient}>
      <ControlsContext.Provider value={[controlsState, dispatch]}>
        <main className={classes.main}>
          <ThemeProvider theme={createTheme(controlsState.themeOptions)}>
            <CssBaseline />
            <Header />
            <Controls />
            <ErrorBoundary>
              {controlsState.viewType === 'list' ? <TodosList /> : <TodosTable />}
              <AddTodo />
            </ErrorBoundary>
          </ThemeProvider>
        </main>
      </ControlsContext.Provider>
    </QueryClientProvider>
  );
}
