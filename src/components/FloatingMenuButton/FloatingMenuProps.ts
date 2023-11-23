import {IconName} from '@components';

export type OptionsType = {
  title: string;
  icon: IconName;
  action: () => void;
};

export interface IFloatingMenu {
  option: OptionsType;
}
