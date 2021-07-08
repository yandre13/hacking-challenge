function FormHome() {
  return (
    <form className="my-6 w-full md:w-80">
      <div className="w-full mb-5">
        <select
          className="w-[30%] border-t border-b border-l border-gray-300 rounded-l px-4 py-3 outline-none cursor-pointer"
          type="tel"
          placeholder="Nro. de doc"
        >
          <option value="DNI">DNI</option>
        </select>
        <input
          className="w-[70%] border border-gray-300 rounded-r px-4 py-3 outline-none"
          type="tel"
          placeholder="Nro. de doc"
        />
      </div>
      <div className="w-full mb-5">
        <input
          className="w-full border border-gray-300 rounded px-4 py-3 outline-none"
          type="tel"
          placeholder="Celular"
        />
      </div>
      <div className="w-full mb-5">
        <input
          className="w-full border border-gray-300 rounded px-4 py-3 outline-none"
          type="text"
          placeholder="Placa"
        />
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
