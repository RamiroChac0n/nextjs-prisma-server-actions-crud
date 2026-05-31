import React from 'react'
import { ModeToggle } from './theme-toggle-button'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

function Navbar() {
  return (
    <nav className='flex justify-between'>
      <h1>NextActionCRUD</h1>
      <div className='flex gap-x-2 items-start'>
        <Link href="/new" className={buttonVariants({ variant: "secondary" })}>
          Create Task
        </Link>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar
