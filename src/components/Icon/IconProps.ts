import {
  StarIcon,
  MenuIcon,
  LockIcon,
  UserIcon,
  HeartIcon,
  EyeOnIcon,
  LogoutIcon,
  EyeOffIcon,
  ArrowUpIcon,
  CalendarIcon,
  ThumbsUpIcon,
  HeartFillIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  CloseCircleIcon,
} from '@icons';
import {ThemeColors} from '@theme';

export interface IconProps {
  onPress?: () => void;
  color?: ThemeColors;
  name: IconName;
  size?: number;
}

export interface IconBase {
  size?: number;
  color?: string;
}

export const iconRegistry = {
  chevronLeft: ChevronLeftIcon,
  checkCircle: CheckCircleIcon,
  closeCircle: CloseCircleIcon,
  heartFill: HeartFillIcon,
  calendar: CalendarIcon,
  thumbsUp: ThumbsUpIcon,
  arrowUp: ArrowUpIcon,
  eyeOff: EyeOffIcon,
  logout: LogoutIcon,
  heart: HeartIcon,
  eyeOn: EyeOnIcon,
  lock: LockIcon,
  menu: MenuIcon,
  star: StarIcon,
  user: UserIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
