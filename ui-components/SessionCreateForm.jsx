/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
  TextAreaField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createSession } from "./graphql/mutations";
const client = generateClient({
  authMode: 'userPool',
});
export default function SessionCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    description: "",
    additionalInfo: "",
    accessibilityRequest: false,
    assistanceToAttend: false,
    underrepresented: false,
    level: "",
    status: "IN_REVIEW",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [additionalInfo, setAdditionalInfo] = React.useState(
    initialValues.additionalInfo
  );
  const [accessibilityRequest, setAccessibilityRequest] = React.useState(
    initialValues.accessibilityRequest
  );
  const [assistanceToAttend, setAssistanceToAttend] = React.useState(
    initialValues.assistanceToAttend
  );
  const [underrepresented, setUnderrepresented] = React.useState(
    initialValues.underrepresented
  );
  const [level, setLevel] = React.useState(initialValues.level);
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setAdditionalInfo(initialValues.additionalInfo);
    setAccessibilityRequest(initialValues.accessibilityRequest);
    setAssistanceToAttend(initialValues.assistanceToAttend);
    setUnderrepresented(initialValues.underrepresented);
    setLevel(initialValues.level);
    setStatus(initialValues.status);
    setErrors({});
  };
  const required = {
    type: "Required",
  }
  const validations = {
    title: [required],
    description: [required],
    additionalInfo: [required],
    accessibilityRequest: [required],
    assistanceToAttend: [required],
    underrepresented: [required],
    level: [required],
    status: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      width='50vw'
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          description,
          additionalInfo,
          accessibilityRequest,
          assistanceToAttend,
          underrepresented,
          level,
          status,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createSession.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SessionCreateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              additionalInfo,
              accessibilityRequest,
              assistanceToAttend,
              underrepresented,
              level,
              status,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextAreaField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        rows={5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              additionalInfo,
              accessibilityRequest,
              assistanceToAttend,
              underrepresented,
              level,
              status,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextAreaField>
      <TextAreaField
        label="Additional info"
        isRequired={false}
        isReadOnly={false}
        value={additionalInfo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              additionalInfo: value,
              accessibilityRequest,
              assistanceToAttend,
              underrepresented,
              level,
              status,
            };
            const result = onChange(modelFields);
            value = result?.additionalInfo ?? value;
          }
          if (errors.additionalInfo?.hasError) {
            runValidationTasks("additionalInfo", value);
          }
          setAdditionalInfo(value);
        }}
        onBlur={() => runValidationTasks("additionalInfo", additionalInfo)}
        errorMessage={errors.additionalInfo?.errorMessage}
        hasError={errors.additionalInfo?.hasError}
        {...getOverrideProps(overrides, "additionalInfo")}
      ></TextAreaField>
      <SwitchField
        label="Are you a person with a disability or do you require accessibility resources?"
        defaultChecked={false}
        isDisabled={false}
        isChecked={accessibilityRequest}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              description,
              additionalInfo,
              accessibilityRequest: value,
              assistanceToAttend,
              underrepresented,
              level,
              status,
            };
            const result = onChange(modelFields);
            value = result?.accessibilityRequest ?? value;
          }
          if (errors.accessibilityRequest?.hasError) {
            runValidationTasks("accessibilityRequest", value);
          }
          setAccessibilityRequest(value);
        }}
        onBlur={() =>
          runValidationTasks("accessibilityRequest", accessibilityRequest)
        }
        errorMessage={errors.accessibilityRequest?.errorMessage}
        hasError={errors.accessibilityRequest?.hasError}
        {...getOverrideProps(overrides, "accessibilityRequest")}
      ></SwitchField>
      <SwitchField
        label="Do you need assistance to attend the event?"
        defaultChecked={false}
        isDisabled={false}
        isChecked={assistanceToAttend}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              description,
              additionalInfo,
              accessibilityRequest,
              assistanceToAttend: value,
              underrepresented,
              level,
              status,
            };
            const result = onChange(modelFields);
            value = result?.assistanceToAttend ?? value;
          }
          if (errors.assistanceToAttend?.hasError) {
            runValidationTasks("assistanceToAttend", value);
          }
          setAssistanceToAttend(value);
        }}
        onBlur={() =>
          runValidationTasks("assistanceToAttend", assistanceToAttend)
        }
        errorMessage={errors.assistanceToAttend?.errorMessage}
        hasError={errors.assistanceToAttend?.hasError}
        {...getOverrideProps(overrides, "assistanceToAttend")}
      ></SwitchField>
      <SwitchField
        label="Do you belong to an underrepresented in tech group?"
        defaultChecked={false}
        isDisabled={false}
        isChecked={underrepresented}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              description,
              additionalInfo,
              accessibilityRequest,
              assistanceToAttend,
              underrepresented: value,
              level,
              status,
            };
            const result = onChange(modelFields);
            value = result?.underrepresented ?? value;
          }
          if (errors.underrepresented?.hasError) {
            runValidationTasks("underrepresented", value);
          }
          setUnderrepresented(value);
        }}
        onBlur={() => runValidationTasks("underrepresented", underrepresented)}
        errorMessage={errors.underrepresented?.errorMessage}
        hasError={errors.underrepresented?.hasError}
        {...getOverrideProps(overrides, "underrepresented")}
      ></SwitchField>
      <SelectField
        label="Level"
        placeholder="Please select an option"
        isDisabled={false}
        value={level}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              additionalInfo,
              accessibilityRequest,
              assistanceToAttend,
              underrepresented,
              level: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.level ?? value;
          }
          if (errors.level?.hasError) {
            runValidationTasks("level", value);
          }
          setLevel(value);
        }}
        onBlur={() => runValidationTasks("level", level)}
        errorMessage={errors.level?.errorMessage}
        hasError={errors.level?.hasError}
        {...getOverrideProps(overrides, "level")}
      >
        <option
          children="Beginner"
          value="BEGINNER"
          {...getOverrideProps(overrides, "leveloption0")}
        ></option>
        <option
          children="Intermediate"
          value="INTERMEDIATE"
          {...getOverrideProps(overrides, "leveloption1")}
        ></option>
        <option
          children="Advanced"
          value="ADVANCED"
          {...getOverrideProps(overrides, "leveloption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
