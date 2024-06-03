import { PaletteMode } from '@mui/material';
import {
  IconRadioButtonGroup,
  IconRadioButtonProps
} from 'app/common/components/buttons/IconRadioButtonGroup';
import {
  DarkModeIcon,
  LightModeIcon,
  ListIcon,
  TableIcon
} from 'app/common/components/icons/Icons';
import { ViewType } from 'app/model/contexts/ControlsContext';
import { Switch } from '../../common/components/inputs/Switch';
import classes from './Controls.module.scss';
import { useControlsViewModel } from './model/useControlsViewModel';

export const Controls = () => {
  const vm = useControlsViewModel();

  const viewTypeButtons: IconRadioButtonProps<ViewType>[] = [
    { icon: <ListIcon />, onClick: () => vm.setViewType('list'), value: 'list' },
    { icon: <TableIcon />, onClick: () => vm.setViewType('table'), value: 'table' }
  ];

  const viewModeButtons: IconRadioButtonProps<PaletteMode>[] = [
    { icon: <LightModeIcon />, onClick: () => vm.setViewMode('light'), value: 'light' },
    { icon: <DarkModeIcon />, onClick: () => vm.setViewMode('dark'), value: 'dark' }
  ];

  return (
    <section className={classes.controls}>
      <IconRadioButtonGroup buttons={viewTypeButtons} initialValue="list" />
      <Switch label="Show undone only" onClick={vm.toggleShouldShowUndoTodosOnly} />
      <IconRadioButtonGroup buttons={viewModeButtons} initialValue="dark" />
    </section>
  );
};
