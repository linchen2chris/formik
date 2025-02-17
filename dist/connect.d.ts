import * as React from 'react';
import { FormikContext } from './types';
export declare function connect<OuterProps, Values = {}>(
  Comp: React.ComponentType<
    OuterProps & {
      formik: FormikContext<Values>;
    }
  >
): React.ComponentType<OuterProps>;
