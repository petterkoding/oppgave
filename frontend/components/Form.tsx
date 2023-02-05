import {useForm} from "react-hook-form"

interface Forflytning {
    dyreholdId: string
    individ: [ number, number ]
    produksjonsplassId: string
}

type FormProps = {
    selectOptions: Produksjonsplass[]
}

const Form = ({selectOptions}:FormProps) => {

    const {register, handleSubmit, formState:{errors}} = useForm<Forflytning>()

    async function onSubmit(data : Forflytning){
      
        const options  = {
            body: JSON.stringify(data),
            method: "POST",
            header: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
    
        try{  
            const response = await fetch("http://localhost:5000/registrerforflytning", options)
            console.log("response", response)
        }catch(err){
            console.log("ERROR >>>",err)
        } 

    }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-200 py-5 px-2 w-[400px] mt-12">

        <div className="flex flex-col mb-4">

            <label htmlFor="dyreholdId">Dyrehold ID:</label>
            <select
                {...register("dyreholdId", {required: true})}
                name="dyreholdId" id="dyreholdId"
                className="bg-white border border-black p-1">

                <option disabled>vennligst velg</option>
                <option value="griser">griser</option>
                <option value="kuer">kuer</option>
                <option value="høner">høner</option>
                <option value="sauer">sauer</option>

            </select>
            {errors.dyreholdId && <span className="text-xs text-red-500 first-letter:capitalize">Dyrehold er påkrevd</span>}
        </div>

        <div className="flex flex-col mb-4">

            <label htmlFor="individ">Individ:</label>
            <input
            {...register("individ", {required: true, valueAsNumber: true, min: 10})}
            placeholder="Individ nummer"
            type="number" id="individ"
            className="bg-white border border-black p-1"/>
            {errors.individ && <span className="text-xs text-red-500 first-letter:capitalize">Individ må være et nummer *påkrevd</span>}
        </div>
   
        <div className="flex flex-col mb-4">

            <label htmlFor="produksjonsplassId">Produksjonsplass ID:</label>
            <select
            {...register("produksjonsplassId", {required: true})}
                name="produksjonsplassId" id="produksjonsplassId"
                className="bg-white border border-black p-1">
                {selectOptions?.map((el, idx)=>(
               
                    <option key={idx} value={el.produksjonsplassid}> {el.produksjonsplassid}</option>
                
                    )
                )}
            </select>
            {errors.produksjonsplassId && <span className="text-xs text-red-500 first-letter:capitalize">Produksjonsplass er påkrevd</span>}
        </div>

        <button
            className="bg-gray-100 text-black px-6 py-2"
            type="submit">
            Send skjema
        </button>
    </form>
  )
}

export default Form