import React from 'react'
import SkillBadge from './SkillBadge'

const Skills = ({skills}) => {
  return (
    <div className='p-4 text-center'>
      <h3 className='font-semibold text-lg text-[#667eea] border-b mb-2.5 pb-1'>Skills</h3>
      <div className='flex flex-wrap gap-x-6 gap-y-2 justify-center pt-4'>
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill}/>
        ))}
      </div>
    </div>
  )
}

export default Skills