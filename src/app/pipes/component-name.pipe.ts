import {
    Pipe,
    PipeTransform
} from '@angular/core';

import { ComponentNameSuffix } from '../models';

@Pipe({
    name: 'componentName'
})
export class ComponentNamePipe implements PipeTransform {
    transform(name: string) {
        this.removeSuffix(name);
        this.split(name)

        return name;
    }

    removeSuffix(name: string) {
        if (name.includes(ComponentNameSuffix.Api)) name.replace(ComponentNameSuffix.Api, '');
        else if (name.includes(ComponentNameSuffix.Component)) name.replace(ComponentNameSuffix.Component, '');
        else if (name.includes(ComponentNameSuffix.Dialog)) name.replace(ComponentNameSuffix.Dialog, '');
        else if (name.includes(ComponentNameSuffix.Directive)) name.replace(ComponentNameSuffix.Directive, '');
        else if (name.includes(ComponentNameSuffix.Form)) name.replace(ComponentNameSuffix.Form, '');
        else if (name.includes(ComponentNameSuffix.Module)) name.replace(ComponentNameSuffix.Module, '');
        else if (name.includes(ComponentNameSuffix.Pipe)) name.replace(ComponentNameSuffix.Pipe, '');
        else if (name.includes(ComponentNameSuffix.Route)) name.replace(ComponentNameSuffix.Route, '');
        else if (name.includes(ComponentNameSuffix.Service)) name.replace(ComponentNameSuffix.Service, '');

        return name;
    }

    checkUpper(c: string) {
        return c == c.toUpperCase();
    }

    split(name: string) {
        const letters: string[] = name.split("");

        letters.forEach((x: string, i: number) => {
            if (this.checkUpper(x) && !!i)
                letters.splice(i - 1, 0, " ");
        });

        return letters.join();
    }

}
