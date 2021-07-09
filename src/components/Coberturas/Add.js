import {motion} from 'framer-motion'

function Add({added, onClick, isMobile}) {
  return (
    <div
      className="flex items-center mt-0 md:mt-4"
      role="button"
      onClick={onClick}
    >
      {isMobile ? (
        <Mobile onClick={onClick} added={added} />
      ) : (
        <Desktop onClick={onClick} added={added} />
      )}
    </div>
  )
}

function Mobile({added}) {
  return (
    <div className="flex items-center pl-3" role="button">
      <motion.div
        animate={{background: added ? '#7CC954' : '#E4E8F7'}}
        className="w-[54px] rounded-full p-[2px]"
      >
        <motion.div
          animate={{x: !added ? 0 : '22px'}}
          className="w-7 h-7 bg-white rounded-full"
        ></motion.div>
      </motion.div>
    </div>
  )
}

function Desktop({added}) {
  return (
    <>
      <Icon added={added} />
      <span className="text-sec text-xs pl-2 uppercase">
        {added ? 'quitar' : 'agregar'}
      </span>
    </>
  )
}

function Icon({added}) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity=".6"
        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 23.077C5.892 23.077.923 18.107.923 12 .923 5.892 5.893.923 12 .923c6.108 0 11.077 4.97 11.077 11.077 0 6.108-4.97 11.077-11.077 11.077z"
        fill="#939DFF"
      />
      {added ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.052 11.515a.596.596 0 110 1.192H7.97a.596.596 0 110-1.192h8.08z"
          fill="#6F7DFF"
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.415 8.232a.596.596 0 111.192 0v3.283h3.444a.596.596 0 110 1.192h-3.444v3.606a.596.596 0 11-1.192 0v-3.606H7.97a.596.596 0 110-1.192h3.445V8.232z"
          fill="#6F7DFF"
        />
      )}
    </svg>
  )
}

export default Add
