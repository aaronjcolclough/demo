import { ControlComponents } from './controls';
import { InfoComponents } from './info';
import { LayoutComponents } from './layout';

export const GeneralComponents = [
    ...ControlComponents,
    ...InfoComponents,
    ...LayoutComponents
];

export * from './controls';
export * from './info';
export * from './layout';
