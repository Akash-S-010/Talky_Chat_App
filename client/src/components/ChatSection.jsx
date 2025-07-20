import React from 'react'
import {Info} from 'lucide-react'

const ChatSection = ({selectedUser}) => {
  return selectedUser ? (
    // Chat section header
    <div className='px-5 py-3 bg-[#8185B2]/30 h-full overflow-y-scroll relative rounded'>
      <div className='flex item-center gap-3 py-3 border-b border-stone-500'>
        <img src="https://c1.klipartz.com/pngpicture/314/450/sticker-png-circle-user-profile-avatar-computer-program-symbol-oval.png" alt="profile" className='w-8 rounded-full'/>
        <p className='flex-1 text-lg text-charcoal font-bold items-center gap-2'>Martin John
          <div className='size-2 rounded-full bg-green-300 inline-block ml-2'></div>
        </p>
        <Info className='size-6 cursor-pointer my-auto text-charcoal' />
      </div>

      {/* Chat messages section */}
      <div className='flex flex-col items-center justify-center gap-2 text-charcoal h-full overflow-y-scroll p-3 pb-6'>
        {messagesDummyData.map((message, i)=>(
          <div key={i}>

          </div>
        ))}
      </div>
    </div>
  ): (

    // right section when no user is selected
    <div className='flex flex-col items-center justify-center h-full gap-3 max-md:hidden'>
      <img src="./src/assets/logo.png" alt="logo" className='max-w-26' />
      <p className='text-charcoal text-2xl font-semibold'>Fell free to chat anytime, anywhere.</p>
    </div>
  )
}

export default ChatSection
