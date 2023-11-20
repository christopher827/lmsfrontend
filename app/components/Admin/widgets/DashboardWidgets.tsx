import {FC,useState} from 'react'
import UserAnalytics from '../Analytics/UserAnalytics'
import { BiBorderLeft } from 'react-icons/bi';
import { CircularProgress,Box } from '@mui/material';
import {PiUsersFourLight} from 'react-icons/pi';

type Props={
    open?:boolean;
    value?:number;
}
const CircularProgressWithLabel:FC<Props>=({open,value})=>{
    return(
        <Box sx={{position:"relative", display:"inline-flex"}}>
<CircularProgress variant='determinate' value={value} size={45} color={value && value > 99 ? "info" :"error"} thickness={4} style={{zIndex:open ? -1 : 1}}/>
<Box sx={{top:0, left:0, bottom:0,right:0, position:"absolute", display:"flex", alignItems:"center", justifyContent:"center"}}>
</Box>
        </Box>
    )
}

const DashboardWidgets : FC <Props> = ({open,value}) => {
  return (
    <div className='mt-[30px] max-h-screen'>
      <div className="grid grid-cols-[75%,25%]">
<div className="p-8">
    <UserAnalytics isDashboard={true}/>
</div>

<div className="pt-[80px] pr-8">
<div className="w-full dark:bg-[#111C43] rounded-sm shadow">
<div className="flex items-center p-5 justify-between">
<div>
<BiBorderLeft className="dark:text-[#45CBA0] text-[#000] text-[30px]"/ >
    <h5 className='pt-2 font-Poppins dark:text-[#fff] text-black text-[20px]'>120</h5>
    <h5 className='pt-2 font-Poppins dark:text-[#fff] text-black text-[20px] font-[400]'>Sales Obtained</h5>
</div>

<div>
<CircularProgressWithLabel value={100} open={open}/>
<h5 className='text-center pt-4'>+120</h5>
</div>
</div>
</div>

<div className='w-full dark:bg-[#111C43] rounded-sm shadow my-8'>
<div className='flex items-center p-5 justify-between'>
<div>
<PiUsersFourLight className="dark:text-[#45CBA0] text-[#000] text-[30px]"/>
<h5 className='pt-2 font-Poppins dark:text-[#fff] text-black text-[20px]'>450</h5>
<h5 className='pt-2 font-Poppins dark:text-[#fff] text-black text-[20px]'>New Users</h5>

</div>
</div>
<div>
<CircularProgressWithLabel value={40} open={open}/>
<h5 className='text-center pt-4'>+150%</h5>

</div>
</div>
</div>
      </div>

      
    </div>
    
  )
}

export default DashboardWidgets
