import * as React from 'react';
export declare type FormikFormProps = Pick<
  React.FormHTMLAttributes<HTMLFormElement>,
  Exclude<
    keyof React.FormHTMLAttributes<HTMLFormElement>,
    'onReset' | 'onSubmit'
  >
>;
export declare function Form(props: FormikFormProps): JSX.Element;
export declare namespace Form {
  var displayName: string;
}
