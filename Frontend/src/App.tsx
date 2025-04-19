import {Button} from './Components/Button/Button'
import { PlusIcon } from './Components/icons/plusicon';
import  {ShareIcon } from './Components/icons/ShareIcon';

function App() {

  

  return (
    <>
        <div className='flex justify-center gap-4'>
        <Button  variants="primary" size="lg" text="show" startIcon={<PlusIcon  btnSize="lg"/> } endIcon={<ShareIcon btnSize="lg"/>}></Button>
      <Button  variants="primary" size="md" text="show" startIcon={<PlusIcon btnSize='md'/>} endIcon={<ShareIcon btnSize='md'/>}></Button>
      <Button  variants="primary" size="sm" text="show" startIcon={<PlusIcon btnSize='sm'/>}></Button>
        </div>
      
    
      
    </>
  )
}

export default App
