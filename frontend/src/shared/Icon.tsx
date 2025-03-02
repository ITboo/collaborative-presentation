import { createElement } from 'react';
import { CirclePlus, Clock, Presentation, User} from 'lucide-react';

const icons = {
  plus: CirclePlus,
  logo: Presentation,
  clock: Clock,
  user: User

};

export const Icon = ({ name, size, ...restProps }: { name: keyof typeof icons, size?:number }) => {
  return createElement(icons[name], restProps);
};