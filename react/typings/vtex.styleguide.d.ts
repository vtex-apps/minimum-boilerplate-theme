declare module "vtex.styleguide" {
    import { ComponentType } from "react";

    export const Input: ComponentType<InputProps>;

    interface InputProps {
        [key: string]: any
    }
}
