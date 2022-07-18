import { ReactNode } from 'react';
import { FormControlProps } from '@chakra-ui/react';

declare type FormGroupProps = Omit<FormControlProps, 'onChange' | 'defaultValue' | 'label'> & {
    children?: ReactNode;
    errorMessage?: ReactNode;
    helper?: ReactNode;
    id?: string;
    isRequired?: boolean;
    label?: ReactNode;
    showError?: boolean;
};
declare const FormGroup: ({ children, errorMessage, helper, id, isRequired, label, showError, ...props }: FormGroupProps) => JSX.Element;

export { FormGroup, FormGroupProps };
