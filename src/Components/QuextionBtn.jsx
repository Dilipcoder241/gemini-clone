import React, { useContext } from 'react';
import { LuMessageSquare } from "react-icons/lu";
import { Context } from '../Context/Context';

function QuextionBtn({question}) {

    const {onSent , setPrevQuestion} = useContext(Context);

    const loadPrompt = (question) =>{
        onSent(question);
        setPrevQuestion(question);
    }

    return (
        <button onClick={()=>loadPrompt(question)} className='hover:bg-zinc-300 px-4 py-2 rounded-full flex items-center gap-2 w-[95%]'>
            <div>
                <LuMessageSquare size={25} />
            </div>
            <div className='overflow-hidden text-ellipsis whitespace-nowrap'>
                {question.slice(0,27)}
            </div>
        </button>
    )
}

export default QuextionBtn