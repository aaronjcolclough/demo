import { DynamicComponentLoaderRoute } from "src/app/routes/dynamic-component-loader";
import { Demo } from "../demo";

export const Demos: Demo[] = [
    new Demo(DynamicComponentLoaderRoute, new Date(2022, 10, 5, 18, 0, 0, 0), 'dynamic-component-loader', 'A dynamic component loader is a directive constructed with a viewContainerRef. When the directive is place on a ng-template it transforms the element into an outlet for a component. This becomes extremely useful with components like dialogs since content projection is not a possibility.')
];
