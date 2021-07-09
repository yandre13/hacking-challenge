import {useAppValue} from 'context/AppContext'
import {useRouter} from 'next/dist/client/router'
import React from 'react'
import {useForm} from 'react-hook-form'

function FormHome() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: {errors},
  } = useForm()
  const [, dispatch] = useAppValue()
  const router = useRouter()
  const onSubmit = data => {
    if (Object.keys(errors).length === 0) {
      dispatch({type: 'setPlaca', payload: data.placa})
      router.push('/armatuplan')
    }
  }

  let timeout
  React.useEffect(() => {
    /* eslint-disable */
    timeout = setTimeout(() => {
      Object.keys(errors).length > 0 && clearErrors()
    }, 7000)
    return () => clearTimeout(timeout)
  }, [Object.keys(errors).length])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-6 w-full md:w-80">
      <div className="w-full mb-5">
        <select
          className="w-[30%] border-t border-b border-l border-gray-300 rounded-l px-4 py-3 outline-none cursor-pointer"
          type="tel"
          placeholder="Nro. de doc"
        >
          <option value="DNI">DNI</option>
        </select>
        <input
          {...register('document', {required: true, pattern: /([0-9]{8})/})}
          className="w-[70%] border border-gray-300 rounded-r px-4 py-3 outline-none"
          type="tel"
          placeholder="Nro. de doc"
        />
        {errors.document && (
          <p className="text-main mt-2">Por favor ingresa 8 dígitos</p>
        )}
      </div>
      <div className="w-full mb-5">
        <input
          {...register('phone', {
            required: true,
            pattern: /([9]{1})([0-9]{8})/,
          })}
          className="w-full border border-gray-300 rounded px-4 py-3 outline-none"
          type="tel"
          placeholder="Celular"
        />
        {errors.phone && (
          <p className="text-main mt-2">Por favor ingresa 9 dígitos</p>
        )}
      </div>
      <div className="w-full mb-5">
        <input
          {...register('placa', {required: true})}
          className="w-full border border-gray-300 rounded px-4 py-3 outline-none"
          type="text"
          placeholder="Placa"
        />
        {errors.placa && (
          <p className="text-main mt-2">Por favor ingresa una placa válida</p>
        )}
      </div>
      <div className="w-full mb-5">
        <label className="flex">
          <input className="scale-125 origin-left" type="checkbox" required />
          <small className="pl-3 text-sm self-end mt-[13px]">
            Acepto la{' '}
            <span className="underline">
              Política de Protección de Datos Personales
            </span>{' '}
            y los <span className="underline">Términos y Condiciones.</span>
          </small>
        </label>
      </div>
      <button
        className="text-white text-sm uppercase
				bg-main rounded-lg
				px-12 py-4 w-full md:w-auto"
        type="submit"
      >
        Cotízalo
      </button>
    </form>
  )
}

export default FormHome
