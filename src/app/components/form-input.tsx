import React from 'react';
import { FieldErrors, UseFormRegister, ValidationRule } from 'react-hook-form';
// import { CareerInputs } from './career-form';
// import { ContactsInputs } from './contacts-form';

export interface FormInputProps {
  required: boolean;
  pattern?: ValidationRule<RegExp>;
  placeholder?: string;
  label: string;
  name: 'name' | 'email' | 'position' | 'phone' | 'message';
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  textarea: boolean;
}

export type Inputs = {
  // required: boolean;
  // pattern?: ValidationRule<RegExp>;
  name: string;
  email: string;
  position?: string;
  phone?: string;
  message?: string;
  checked?: boolean;
};

export default function FormInput({
  required,
  pattern,
  placeholder,
  label,
  name,
  register,
  errors,
  textarea,
}: FormInputProps) {
  return (
    <div className="mb-4 xl:basis-1/2 ">
      <label className="mb-1 block" htmlFor={name}>
        {label}
      </label>
      {textarea ? (
        <textarea
          {...register(name, { required, pattern })}
          aria-invalid={errors[name] ? 'true' : 'false'}
          id={name}
          placeholder={placeholder}
          className={`h-[193px] w-full resize-none px-2 py-1.5 text-xl md:h-[221px] md:w-[221px] md:h-[228px] xl:w-[292px] xl:h-[268px] ${
            errors[name]
              ? 'text-[#FF5757] focus:text-[#FF5757]'
              : 'text-white text-opacity-20 focus:text-white'
          } bg-white bg-opacity-5 focus:text-white`}
        />
      ) : (
        <input
          {...register(name, { required, pattern })}
          id={name}
          placeholder={placeholder}
          aria-invalid={errors[name] ? 'true' : 'false'}
          className={`w-full px-1 py-1.5 text-xl ${
            errors[name]
              ? 'text-[#FF5757] focus:text-[#FF5757]'
              : 'text-white text-opacity-20 focus:text-white'
          } bg-white bg-opacity-5 focus:text-white`}
        />
      )}
      {errors[name] && (
        <p role="alert" className="ml-auto w-fit text-[#FF5757]">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
}
