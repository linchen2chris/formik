import * as React from 'react';
import { FormikContext } from './types';
export declare const FormikProvider: React.ProviderExoticComponent<
  React.ProviderProps<FormikContext<any>>
>;
export declare const FormikConsumer: React.ExoticComponent<
  React.ConsumerProps<FormikContext<any>>
>;
export declare function useFormikContext<Values>(): FormikContext<Values>;
