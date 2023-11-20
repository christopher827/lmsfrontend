import {styles} from "@/app/styles/style"
import {useEditLayoutMutation,useGetHeroDataQuery} from "@/redux/features/layout/layoutApi"
import { useEffect,useState } from "react";
import {AiOutlineDelete} from "react-icons/ai"
import {HiMinus,HiPlus} from "react-icons/hi"
import {IoMdAddCircleOutline} from "react-icons/io"

const EditFaq=(props:Props)=>{
    const {data,isLoading}=useGetHeroDataQuery("FAQ",{
        refetchOnMountOrArgChange:true,
    });
    const [editLayout, {isSuccess,error}] =useEditLayoutMutation();
    
    const [questions,setQuestions]=useState<any[]>([]);

    useEffect(()=>{
        if (data) {
            setQuestions(data.layout.faq);
        }
    },[data])

    const toggleQuestion=(id:any)=>{
        setQuestions((prevQuestions)=>
        prevQuestions.map((q)=>(q._id === id ? { ...q, active: !q.active }: q))
        
        );
    };
    const handleQuestionChange = (id :any, value:string)=>{
        setQuestions((prevQuestions)=>
            prevQuestions.map((q)=>(q._id === id ? {...q, question:value}:q))
        )
    }

    const handleAnswerChange = (id :any, value:string)=>{
        setQuestions((prevQuestions)=>
            prevQuestions.map((q)=>(q._id === id ? {...q, answer:value}:q))
        )
    }

    const newFaqHandler=()=>{
        setQuestions([
            ...questions,{
                question:"",
                answer:"",
            }
        ])
    }

    //Functio to check if the FAQ arrays are unchanged
    const areQuestionsUnchanged=(originalQuestions: any [],newQuestions:any[])=>{
        return JSON.stringify(originalQuestions) === JSON.stringify(newQuestions)
    }
const isAnyQuestionEmpty=(questions:any[])=>{
    return questions.some((q)=>q.question === "" || q.answer=== "")
}
const handleEdit =async ()=>{
    if (!areQuestionsUnchanged(data.layout.faq,questions) && !isAnyQuestionEmpty(questions)) {
 await useEditLayoutMutation({
    type:"FAQ",
    faq:questions
 })       
    }
}
    return (
        <div className="w-[90%] 800px:w-[80%] m-auto mt-[120px]">
<div className="mt-12">
<div className="space-y-8">
{questions.map((q:any)=>(
    <div key={q._id} className={`${q._id ! == questions[0]?._id && "border-t"} border-gray-200 pt-6`}>
<dt className="text-lg">
<button className="flex items-start dark:text-white text-black justify-between w-full text-left focus:outline-none"></button>
</dt>
    </div>
))

}
</div>
</div>
        </div>
    )
}
export default EditFaq