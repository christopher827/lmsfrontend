import { styles } from "@/app/styles/style";
import { useEditProfileMutation } from "@/redux/features/user/userApi";
import {toast} from "react-hot-toast"

type Props={}

const EditCategories=(props:Props)=>{
    const {data,isLoading} =useGetHeroDataQuery("Categories",{
        refetchOnMountOrArgChange:true,
    });
    const [editLayout, {isSuccess:layoutSuccess,error}]=useEditProfileMutation();
    const [categories,setCategories]=useState<any>([])
useEffect(()=>{
    if (data) {
        setCategories(data.layout.categories)
    }
},[data])

return(
<>
{
    isLoading ?(
        <Loader/>
    ):(
        <div className="mt-[120px] text-center">
<h1 className={`${styles.title}`}>All Categories</h1>
{
    categories && categories.map((item:any, index:number)=>{
        
    })
}
        </div>
    )
}
</>
)

}
export default EditCategories