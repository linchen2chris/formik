import * as React from 'react';
import {
  FormikHelpers,
  FormikProps,
  FormikSharedConfig,
  FormikValues,
  FormikTouched,
  FormikErrors,
} from './types';
export declare type InjectedFormikProps<Props, Values> = Props &
  FormikProps<Values>;
export declare type FormikBag<P, V> = {
  props: P;
} & FormikHelpers<V>;
export interface WithFormikConfig<
  Props,
  Values extends FormikValues = FormikValues,
  DeprecatedPayload = Values
> extends FormikSharedConfig<Props> {
  displayName?: string;
  handleSubmit: (values: Values, formikBag: FormikBag<Props, Values>) => void;
  mapPropsToValues?: (props: Props) => Values;
  mapPropsToStatus?: (props: Props) => any;
  mapPropsToTouched?: (props: Props) => FormikTouched<Values>;
  mapPropsToErrors?: (props: Props) => FormikErrors<Values>;
  mapValuesToPayload?: (values: Values) => DeprecatedPayload;
  validationSchema?: any | ((props: Props) => any);
  validate?: (values: Values, props: Props) => void | object | Promise<any>;
}
export declare type CompositeComponent<P> =
  | React.ComponentClass<P>
  | React.StatelessComponent<P>;
export interface ComponentDecorator<TOwnProps, TMergedProps> {
  (component: CompositeComponent<TMergedProps>): React.ComponentType<TOwnProps>;
}
export interface InferableComponentDecorator<TOwnProps> {
  <T extends CompositeComponent<TOwnProps>>(component: T): T;
}
export declare function withFormik<
  OuterProps extends object,
  Values extends FormikValues,
  Payload = Values
>({
  mapPropsToValues,
  ...config
}: WithFormikConfig<OuterProps, Values, Payload>): ComponentDecorator<
  OuterProps,
  OuterProps & FormikProps<Values>
>;
