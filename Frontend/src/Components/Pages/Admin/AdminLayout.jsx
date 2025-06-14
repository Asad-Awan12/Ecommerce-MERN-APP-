import React from 'react'
import { AdminNavigation } from './AdminNavigation'
import { Outlet } from 'react-router-dom'

export const AdminLayout = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row gap-4 items-start justify-start'>
        <header className='lg:w-1/5 sm:h-2/5 w-full'>
        <AdminNavigation />
        </header>
        <main className='p-8 bg-white w-full'>
            <p>For Admin Content</p>
            <Outlet />
        </main>
    </div>
  )
}
