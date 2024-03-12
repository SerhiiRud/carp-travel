'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormInput from './form-input';
import { Inputs } from './form-input';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    position: yup.string(),
    phone: yup.string(),
    message: yup.string(),
    checked: yup.bool(),
  })
  .required();

export default function CareerForm() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Inputs) => {
    toast('Your data was submitted', {
      position: 'top-right',
      autoClose: 2000,
      theme: 'light',
    });
    console.log(data);
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-xs  font-extralight leading-6 tracking-[0.20em] md:grid md:grid-cols-2 md:gap-5 "
      >
        <div className="md:col-start-1">
          <FormInput
            placeholder="John Smith"
            required={true}
            textarea={false}
            label="Full name"
            name="name"
            register={register}
            pattern={/^[A-Za-z]+$/i}
            errors={errors}
          />
          <FormInput
            placeholder="johnsmith@email.com"
            required={true}
            textarea={false}
            label="Email"
            name="email"
            register={register}
            pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
            errors={errors}
          />
          <FormInput
            placeholder="John Smith"
            required={true}
            textarea={false}
            label="Movie maker"
            name="name"
            register={register}
            pattern={/^[A-Za-z]+$/i}
            errors={errors}
          />
          <FormInput
            placeholder="(097) 12 34 567"
            required={true}
            textarea={false}
            label="Phone"
            name="phone"
            register={register}
            pattern={/^\(\d{3}\) \d{2} \d{2} \d{3}$/i}
            errors={errors}
          />
        </div>
        <div className="md:col-start-2">
          <FormInput
            required={false}
            textarea={true}
            label="Message"
            name="message"
            register={register}
            errors={errors}
          />
        </div>
        <label
          className="relative flex gap-[8px] 
      md:col-start-1 md:col-span-1 md:row-start-10 md:row-span-2"
        >
          <input
            type="checkbox"
            {...register('checked', {})}
            checked={checked}
            onChange={handleCheckboxChange}
            className="w-[28px] opacity-0 md:w-[30px]"
          />
          <div className="absolute top-0 left-0">
            {checked ? (
              <Image
                src={'/icons/checked.svg'}
                width={22}
                height={22}
                alt="checkbox unchecked"
                className="lg:w-[24px] lg:h-[24px]"
              />
            ) : (
              <Image
                src={'/icons/unchecked.svg'}
                width={22}
                height={22}
                alt="checkbox checked"
                className="lg:w-[24px] lg:h-[24px]"
              />
            )}
          </div>

          <span className="mt-1 mb-4 text-[12px] font-200 leading-[1.83] md:mt-0">
            I confirm my consent to the processing of personal data.
          </span>
        </label>
        <button
          type="submit"
          className="block ml-auto text-[30px] font-medium md:col-start-3 md:col-span-1 md:row-start-9 md:row-span-2"
          // className="link ml-auto block text-[30px] font-medium leading-9 focus:outline-8 active:outline-2 xl:text-[32px]"
        >
          SEND
        </button>
      </form>
    </>
  );
}
