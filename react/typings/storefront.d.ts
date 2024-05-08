import { FunctionComponent } from "react";

declare global {
  interface StorefrontFunctionComponent<P = GenericObject>
    extends FunctionComponent<P> {
    getSchema?(props: P): GenericObject
    schema?: GenericObject
  }

  interface StorefrontComponent<P = GenericObject, S = GenericObject>
    extends Component<P, S> {
    getSchema?(props: P): GenericObject
    schema: GenericObject
  }
}
