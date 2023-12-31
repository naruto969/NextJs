 import React from 'react';
 import Users from './users'
 
 const UsersLayout = async ({children}) => {
   return (
     <section className='flex'>
        <aside className='w-1/3 '>
            <Users/>
        </aside>
        <main>{children}</main>
     </section>
   )
 }
 
 export default UsersLayout