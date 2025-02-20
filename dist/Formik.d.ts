import * as React from 'react';
import {
  FormikConfig,
  FormikErrors,
  FormikState,
  FormikTouched,
  FormikValues,
  FieldMetaProps,
  FieldInputProps,
} from './types';
export declare function useFormik<Values extends FormikValues = FormikValues>({
  validateOnChange,
  validateOnBlur,
  isInitialValid,
  enableReinitialize,
  onSubmit,
  ...rest
}: FormikConfig<Values>): {
  initialValues: Values;
  initialErrors: FormikErrors<unknown>;
  initialTouched: FormikTouched<unknown>;
  initialStatus: any;
  handleBlur: (eventOrString: any) => void | ((e: any) => void);
  handleChange: (
    eventOrPath: string | React.ChangeEvent<any>
  ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
  handleReset: (e: any) => void;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  resetForm: (nextState?: Partial<FormikState<Values>> | undefined) => void;
  setErrors: (errors: FormikErrors<Values>) => void;
  setFormikState: (
    stateOrCb:
      | FormikState<Values>
      | ((state: FormikState<Values>) => FormikState<Values>)
  ) => void;
  setFieldTouched: (
    field: string,
    touched?: boolean,
    shouldValidate?: boolean
  ) => any;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => any;
  setFieldError: (field: string, value: string | undefined) => void;
  setStatus: (status: any) => void;
  setSubmitting: (isSubmitting: boolean) => void;
  setTouched: (touched: FormikTouched<Values>) => any;
  setValues: (values: Values) => any;
  submitForm: () => Promise<void>;
  validateForm: (values?: Values) => Promise<FormikErrors<Values>>;
  validateField: (name: string) => Promise<void> | Promise<string | undefined>;
  isValid: boolean;
  dirty: boolean;
  unregisterField: (name: string) => void;
  registerField: (name: string, { validate }: any) => void;
  getFieldProps: ({
    name,
    type,
    value: valueProp,
    as: is,
    multiple,
  }: any) => [FieldInputProps<any>, FieldMetaProps<any>];
  validateOnBlur: boolean;
  validateOnChange: boolean;
  values: Values;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  isSubmitting: boolean;
  isValidating: boolean;
  status?: any;
  submitCount: number;
};
export declare function Formik<
  Values extends FormikValues = FormikValues,
  ExtraProps = {}
>(props: FormikConfig<Values> & ExtraProps): JSX.Element;
export declare function yupToFormErrors<Values>(
  yupError: any
): FormikErrors<Values>;
export declare function validateYupSchema<T extends FormikValues>(
  values: T,
  schema: any,
  sync?: boolean,
  context?: any
): Promise<Partial<T>>;
