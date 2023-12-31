import React, { InputHTMLAttributes, useState } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { styled } from "styled-components";
import FailureIcon from "../Icon/FailureIcon";
import HidePasswordIcon from "../Icon/HidePasswordIcon";
import ShowPasswordIcon from "../Icon/ShowPasswordIcon";

type TInputProps = {
  type?: React.HTMLInputTypeAttribute;
  errorMsg?: string;
  placeholder?: string;
  name: string;
  inputClassName?: string;
  containerClassName?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
} & InputHTMLAttributes<HTMLInputElement>;

const InputContainer = styled.div`
  position: relative;
`;
const InputEl = styled.input<{ $hasErrors?: boolean }>`
  width: 100%;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  flex-shrink: 0;
  outline: none;
  padding: 10px 46px 10px 10px;
  border: ${(props) => (props.$hasErrors ? "1px solid red" : "1px solid transparent")};
  background-color: ${(props) => (props.$hasErrors ? "rgb(255, 215, 215)" : "#e7ecf3")};
  &::placeholder {
    color: ${(props) => (props.$hasErrors ? "rgb(255, 49, 49)" : "#9ca3be")};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${(props) => (props.$hasErrors ? "rgb(255, 215, 215)" : "#e7ecf3")} inset !important;
  }
`;

const InputPasswordIcon = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const ErrorWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-top: 4px;
  /* min-height: 10px; */
`;

const ErrorMessage = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => props.theme.colors.failure};
`;

const Input = ({
  type = "text",
  errorMsg,
  name,
  register,
  inputClassName,
  containerClassName,
  rules,
  placeholder = "Some random placeholder...",
  ...rest
}: TInputProps) => {
  const registerResult = register(name, rules);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  if (type === "password") {
    return (
      <>
        <InputContainer className={containerClassName}>
          <InputEl
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            $hasErrors={Boolean(errorMsg)}
            className={inputClassName}
            autoComplete="on"
            {...rest}
            {...registerResult}
          />
          {showPassword ? (
            <InputPasswordIcon onClick={handleTogglePassword}>
              <ShowPasswordIcon></ShowPasswordIcon>
            </InputPasswordIcon>
          ) : (
            <InputPasswordIcon onClick={handleTogglePassword}>
              <HidePasswordIcon></HidePasswordIcon>
            </InputPasswordIcon>
          )}
        </InputContainer>
        {errorMsg && (
          <ErrorWrapper>
            <FailureIcon></FailureIcon>
            <ErrorMessage>{errorMsg}</ErrorMessage>
          </ErrorWrapper>
        )}
      </>
    );
  }
  return (
    <>
      <InputContainer className={containerClassName}>
        <InputEl
          type={type}
          placeholder={placeholder}
          $hasErrors={Boolean(errorMsg)}
          className={inputClassName}
          {...rest}
          {...registerResult}
        />
      </InputContainer>
      {errorMsg && (
        <ErrorWrapper>
          <FailureIcon></FailureIcon>
          <ErrorMessage>{errorMsg}</ErrorMessage>
        </ErrorWrapper>
      )}
    </>
  );
};

export default Input;
