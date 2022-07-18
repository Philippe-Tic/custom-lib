import { ReactNode } from 'react';
import { FormControlProps } from '@chakra-ui/react';
export declare type FormGroupProps = Omit<FormControlProps, 'onChange' | 'defaultValue' | 'label'> & {
    children?: ReactNode;
    errorMessage?: ReactNode;
    helper?: ReactNode;
    id?: string;
    isRequired?: boolean;
    label?: ReactNode;
    showError?: boolean;
};
export declare const FormGroup: ({ children, errorMessage, helper, id, isRequired, label, showError, ...props }: FormGroupProps) => JSX.Element;
