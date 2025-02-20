import * as React from 'react';
export interface FormikValues {
  [field: string]: any;
}
export declare type FormikErrors<Values> = {
  [K in keyof Values]?: Values[K] extends any[]
    ? Values[K][number] extends object
      ? FormikErrors<Values[K][number]>[] | string | string[]
      : string | string[]
    : Values[K] extends object
    ? FormikErrors<Values[K]>
    : string
};
export declare type FormikTouched<Values> = {
  [K in keyof Values]?: Values[K] extends any[]
    ? Values[K][number] extends object
      ? FormikTouched<Values[K][number]>[]
      : boolean
    : Values[K] extends object
    ? FormikTouched<Values[K]>
    : boolean
};
export interface FormikState<Values> {
  values: Values;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  isSubmitting: boolean;
  isValidating: boolean;
  status?: any;
  submitCount: number;
}
export interface FormikComputedProps<Values> {
  readonly dirty: boolean;
  readonly isValid: boolean;
  readonly initialValues: Values;
  readonly initialErrors: FormikErrors<Values>;
  readonly initialTouched: FormikTouched<Values>;
  readonly initialStatus?: any;
}
export interface FormikHelpers<Values> {
  setStatus(status?: any): void;
  setErrors(errors: FormikErrors<Values>): void;
  setSubmitting(isSubmitting: boolean): void;
  setTouched(touched: FormikTouched<Values>): void;
  setValues(values: Values): void;
  setFieldValue(
    field: keyof Values & string,
    value: any,
    shouldValidate?: boolean
  ): void;
  setFieldError(field: keyof Values & string, message: string): void;
  setFieldTouched(
    field: keyof Values & string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ): void;
  validateForm(values?: any): Promise<FormikErrors<Values>>;
  validateField(field: string): void;
  resetForm(nextState?: Partial<FormikState<Values>>): void;
  setFormikState(
    f:
      | FormikState<Values>
      | ((prevState: FormikState<Values>) => FormikState<Values>),
    cb?: () => void
  ): void;
}
export interface FormikHandlers {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  handleReset: (e?: React.SyntheticEvent<any>) => void;
  handleBlur(e: React.FocusEvent<any>): void;
  handleBlur<T = string | any>(
    fieldOrEvent: T
  ): T extends string ? ((e: any) => void) : void;
  handleChange(e: React.ChangeEvent<any>): void;
  handleChange<T = string | React.ChangeEvent<any>>(
    field: T
  ): T extends React.ChangeEvent<any>
    ? void
    : ((e: string | React.ChangeEvent<any>) => void);
  getFieldProps<Value = any>(
    props: any
  ): [FieldInputProps<Value>, FieldMetaProps<Value>];
}
export interface FormikSharedConfig<Props = {}> {
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  isInitialValid?: boolean | ((props: Props) => boolean);
  enableReinitialize?: boolean;
}
export interface FormikConfig<Values> extends FormikSharedConfig {
  component?: React.ComponentType<FormikProps<Values>> | React.ReactNode;
  render?: (props: FormikProps<Values>) => React.ReactNode;
  children?:
    | ((props: FormikProps<Values>) => React.ReactNode)
    | React.ReactNode;
  initialValues: Values;
  initialStatus?: any;
  initialErrors?: FormikErrors<Values>;
  initialTouched?: FormikTouched<Values>;
  onReset?: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
  validationSchema?: any | (() => any);
  validate?: (values: Values) => void | object | Promise<FormikErrors<Values>>;
}
export declare type FormikProps<Values> = FormikSharedConfig &
  FormikState<Values> &
  FormikHelpers<Values> &
  FormikHandlers &
  FormikComputedProps<Values> &
  FormikRegistration & {
    submitForm: () => Promise<void>;
  };
export interface FormikRegistration {
  registerField(
    name: string,
    fns: {
      validate?: FieldValidator;
    }
  ): void;
  unregisterField(name: string): void;
}
export declare type FormikContext<Values> = FormikProps<Values> &
  Pick<FormikConfig<Values>, 'validate' | 'validationSchema'>;
export interface SharedRenderProps<T> {
  component?: string | React.ComponentType<T | void>;
  render?: (props: T) => React.ReactNode;
  children?: (props: T) => React.ReactNode;
}
export declare type GenericFieldHTMLAttributes =
  | JSX.IntrinsicElements['input']
  | JSX.IntrinsicElements['select']
  | JSX.IntrinsicElements['textarea'];
export interface FieldMetaProps<Value> {
  value: Value;
  error?: string;
  touched: boolean;
  initialValue?: Value;
  initialTouched: boolean;
  initialError?: string;
}
export interface FieldInputProps<Value> {
  value: Value;
  name: string;
  multiple?: boolean;
  checked?: boolean;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
}
export declare type FieldValidator = (
  value: any
) => string | void | Promise<string | void>;
