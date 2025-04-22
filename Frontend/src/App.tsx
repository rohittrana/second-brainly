import { Button } from './Components/Button/Button'
import { PlusIcon } from './Components/icons/PlusIcon'
import { ShareIcon } from './Components/icons/ShareIcon'
import { Card } from './Components/Card/Card'
import { CreateContent } from './Components/CreateContent'
import { useState } from 'react';
import {Sidebar} from './Components/Sidebar/Sidebar'
// import { Sidebar } from './Components/Sidebar/SidebarItem'
function App() {
  const [modelOpen ,setModelOpen] = useState(false);
  
  return (
    <>
    <Sidebar></Sidebar>
      <div className='p-4 ml-72 min-h-screen bg-gray-100 '>
      <CreateContent open={modelOpen} onClose={()=>{
        setModelOpen(false)
      }}></CreateContent>

        <div className='flex justify-end mr-20 gap-4 mt-1'>

          <Button variant='secondary' size="md" startIcon={<ShareIcon btnSize='md' />} text="Share Brain"></Button>
          <Button onClick={()=>{
            setModelOpen(true);
          }} variant='primary' size="md" startIcon={<PlusIcon btnSize='md' /> } text="Add Content"></Button>

        </div>

        <div className='flex gap-2'>
          <Card type='twitter' link='https://x.com/nandini__bagga/status/1914304685340840235' title='tweet from nandani bhagga '></Card>
          <Card type='youtube' link='https://www.youtube.com/watch?v=8of5w7RgcTc&list=RD8of5w7RgcTc' title='youtube vedio  '></Card>
        </div>


      </div>



    </>
  )
}

export default App
