'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import CheckedIcon from '/icons/checked.svg';
// import UnCheckedIcon from '/icons/unchecked.svg';

export type CareerFormType = {
  fullname: string;
  email: string;
  position: string;
  phone: string;
  message: string;
  checked: boolean;
};

const schema = yup
  .object({
    fullname: yup.string().required(),
    email: yup.string().required(),
    position: yup.string().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
    checked: yup.bool().required(),
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
  const onSubmit = (data: CareerFormType) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          className="relative flex flex-col gap-[4px] 
      md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1"
        >
          <span className="text-[12px] font-200 leading-[2] tracking-[2.4px]">
            Full name
          </span>
          <input
            {...register('fullname', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            placeholder="John Smith"
            className="pl-2 text-[13px] font-extralight leading-[1.85] bg-input placeholder:opacity-50 md:text-xl md:leading-[1.2] md:py-1"
          />
          <p className="text-[#FF5757] text-[12px] font-200 leading-[2] tracking-[2.4px]">
            {errors.fullname?.message}
          </p>
        </label>
        <label
          className="relative flex flex-col gap-[4px] 
      md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1"
        >
          <span className="text-[12px] font-200 leading-[2] tracking-[2.4px]">
            E-mail
          </span>
          <input
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
            placeholder="johnsmith@email.com"
            className="pl-2 text-[13px] font-extralight leading-[1.85] bg-input placeholder:opacity-50 md:text-xl md:leading-[1.2] md:py-1"
          />
          <p>{errors.email?.message}</p>
        </label>
        <label
          className="relative flex flex-col gap-[4px] 
      md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1"
        >
          <span className="text-[12px] font-200 leading-[2] tracking-[2.4px]">
            Position
          </span>
          <input
            {...register('position', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            placeholder="Movie maker"
            className="pl-2 text-[13px] font-extralight leading-[1.85] bg-input placeholder:opacity-50 md:text-xl md:leading-[1.2] md:py-1"
          />
          <p>{errors.position?.message}</p>
        </label>
        <label
          className="relative flex flex-col gap-[4px] 
      md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1"
        >
          <span className="text-[12px] font-200 leading-[2] tracking-[2.4px]">
            Phone
          </span>
          <input
            {...register('phone', {
              required: true,
              pattern: /^\(\d{3}\) \d{2} \d{2} \d{3}$/i,
            })}
            placeholder="(097) 12 34 567"
            className="bg-[rgba(255, 255, 255, 0.2)] pl-2 text-[13px] font-extralight leading-[1.85] bg-input placeholder:opacity-50 md:text-xl md:leading-[1.2] md:py-1"
          />
          <p>{errors.phone?.message}</p>
        </label>
        <label
          className="flex flex-col gap-[4px] 
      md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-7"
        >
          <span className="text-[12px] font-200 leading-[2] tracking-[2.4px]">
            Message
          </span>
          <textarea
            {...register('message')}
            className="p-[8px] h-[196px] text-[13px] font-200 leading-[1.85] bg-input placeholder:opacity-50 md:h-full resize-none"
          />
        </label>
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

          <span className="mt-[2px] text-[12px] font-200 leading-[1.83] md:mt-0">
            I confirm my consent to the processing of personal data.
          </span>
        </label>
        <button
          className="ml-auto text-[30px] 
        md:col-start-3 md:col-span-1 md:row-start-9 md:row-span-2"
          type="submit"
        >
          SEND
        </button>
      </form>
    </>
  );
}
