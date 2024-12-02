import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Session } from "./graphql/types";
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
export declare type SessionUpdateFormInputValues = {
    title?: string;
    description?: string;
    additionalInfo?: string;
    accessibilityRequest?: boolean;
    assistanceToAttend?: boolean;
    underrepresented?: boolean;
    level?: string;
    status?: string;
};
export declare type SessionUpdateFormValidationValues = {
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
export declare type SessionUpdateFormOverridesProps = {
    SessionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    additionalInfo?: PrimitiveOverrideProps<TextFieldProps>;
    accessibilityRequest?: PrimitiveOverrideProps<SwitchFieldProps>;
    assistanceToAttend?: PrimitiveOverrideProps<SwitchFieldProps>;
    underrepresented?: PrimitiveOverrideProps<SwitchFieldProps>;
    level?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SessionUpdateFormProps = React.PropsWithChildren<{
    overrides?: SessionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    session?: Session;
    onSubmit?: (fields: SessionUpdateFormInputValues) => SessionUpdateFormInputValues;
    onSuccess?: (fields: SessionUpdateFormInputValues) => void;
    onError?: (fields: SessionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SessionUpdateFormInputValues) => SessionUpdateFormInputValues;
    onValidate?: SessionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SessionUpdateForm(props: SessionUpdateFormProps): React.ReactElement;
