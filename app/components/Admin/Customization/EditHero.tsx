import {useGetHeroDataQuery} from "@reux/features/layout/layoutApi"
import React, {FC,useEffect,useState} from "react"
import { render } from "react-dom"
import {AiOutlineCamera} from "react-icons/ai"

type Props={}

const EditHero :FC <Props> =(props:Props)=>{
    const [image,setImage]=useState("")
    const [title,setTitle]=useState("")
    const [subTitle,setSubTitle]=useState("")
    const {data} = useGetHeroDataQuery("Banner",{
        refetchOnMountOrArgChange : true,
    });

    useEffect(()=>{
        if (data) {
            setTitle(data?.layout?.banner.title);
            setSubTitle(data?.layout?.banner.subTitle);
            setImage(data?.layout?.banner?.image?.url)
        }
    }, [data])

    const handleUpdate= (e:any)=>{
        const file=e.target.files?.[0];
        if (file) {
            const reader=new FileReader();
            reader.onload=(e:any)=>{
                if (reader.readyState === 2) {
                    setImage(e.target.result as string)
                }
            };
            reader.readAsDataURL(file)
        }
    }

    const handleEdit =async()=>{
        await editLayout({
            type:"Banner",
            image,
            title,
            subTitle
        })
    }
    return(
        <>
        <div className="w-full 1000px:flex items-center">

        </div>
        </>
    )
}
export default EditHero