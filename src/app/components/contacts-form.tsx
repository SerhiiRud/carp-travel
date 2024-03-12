'use client';
import React from 'react';
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
    message: yup.string(),
  })
  .required();

export default function ContactsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
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
        className="text-xs  font-extralight leading-6 tracking-[0.20em] md:grid md:grid-cols-[221px,auto] md:gap-5 xl:block xl:w-1/2"
      >
        <div className="xl:flex xl:w-full xl:gap-5">
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
            label="E-mail"
            name="email"
            register={register}
            pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
            errors={errors}
          />
        </div>
        <div>
          <FormInput
            required={false}
            textarea={true}
            label="Message"
            name="message"
            register={register}
            errors={errors}
          />
          <button
            type="submit"
            className="link ml-auto block text-[30px] font-medium leading-9 focus:outline-8 active:outline-2 xl:text-[32px]"
          >
            SEND
          </button>
        </div>
      </form>
    </>
  );
}
