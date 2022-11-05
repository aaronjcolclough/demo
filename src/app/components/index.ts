import { GeneralComponents } from './general';
import { SidenavComponents } from './side-nav';
import { TableComponents } from './table';

export const Components = [
    ...GeneralComponents,
    ...SidenavComponents,
    ...TableComponents
];

export * from './abstract';
export * from './general';
export * from './side-nav';
export * from './table';
