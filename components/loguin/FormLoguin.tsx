'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type Inputs = {
  user: string;
  pass: string;
};

const FormLoguin = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    router.push('/start');
  };

  const inputStyle = 'border-solid border-2 border-black mb-4';

  return (
    <div>
      <form className="flex flex-col pt-5" onSubmit={handleSubmit(onSubmit)}>
        <label className="text-xs" htmlFor="user">
          Email
        </label>
        <input
          className={inputStyle}
          {...register('user', { required: true })}
        />
        {errors.user && (
          <span className="text-xs text-red-600">This field is required</span>
        )}

        <label className="text-xs" htmlFor="pass">
          Password
        </label>
        <input
          className={inputStyle}
          {...register('pass', { required: true })}
        />
        {errors.pass && (
          <span className="text-xs text-red-600">This field is required</span>
        )}

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-sm mb-8"
        >
          Log in
        </button>
      </form>
      <div className="flex justify-around text-center">
        <h3 className="text-sm flex-wrap">Forgot your password?</h3>
      </div>
    </div>
  );
};

export default FormLoguin;
