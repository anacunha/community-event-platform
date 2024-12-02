import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SessionCreateFormInputValues = {
    title?: string;
    description?: string;
    additionalInfo?: string;
    accessibilityRequest?: boolean;
    assistanceToAttend?: boolean;
    underrepresented?: boolean;
    level?: string;
    status?: string;
};
export declare type SessionCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    additionalInfo?: ValidationFunction<string>;
    accessibilityRequest?: ValidationFunction<boolean>;
    assistanceToAttend?: ValidationFunction<boolean>;
    underrepresented?: ValidationFunction<boolean>;
    level?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SessionCreateFormOverridesProps = {
    SessionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    additionalInfo?: PrimitiveOverrideProps<TextFieldProps>;
    accessibilityRequest?: PrimitiveOverrideProps<SwitchFieldProps>;
    assistanceToAttend?: PrimitiveOverrideProps<SwitchFieldProps>;
    underrepresented?: PrimitiveOverrideProps<SwitchFieldProps>;
    level?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SessionCreateFormProps = React.PropsWithChildren<{
    overrides?: SessionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SessionCreateFormInputValues) => SessionCreateFormInputValues;
    onSuccess?: (fields: SessionCreateFormInputValues) => void;
    onError?: (fields: SessionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SessionCreateFormInputValues) => SessionCreateFormInputValues;
    onValidate?: SessionCreateFormValidationValues;
} & React.CSSProperties>;
export default function SessionCreateForm(props: SessionCreateFormProps): React.ReactElement;
