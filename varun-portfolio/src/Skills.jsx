import React from 'react'


const Skills = ({title, img1, img2, img3, img4, para}) => {
  return (
    <div className='mt-20 p-2 w-64 h-80'>
      <div>
        <h1 className='font-bold text-3xl p-2 m-4 text-center'>{title}</h1>
        
        {/* First Row of Images */}
        <div className='flex m-4 p-1'>
          <img className='w-20 h-24 m-2' src={img1} alt="Python" />
          <img className='w-24 h-24 m-2' src={img2} alt="C++" />
        </div>

        {/* Second Row of Images */}
        <div className='flex m-4 p-1'>
          <img className='w-24 h-24 m-2' src={img3} alt="Java" />
          <img className='w-20 h-24 m-2' src={img4} alt="JavaScript" />
        </div>

        <p className='text-center text-gray-500 mb-28'>{para}</p>
      </div>
    </div>
  )
}

export default Skills

