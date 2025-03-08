import { useState } from "react"
import { AllData } from "./AxApi"
import { useEffect } from "react"
import Details from "./Details"

function Route() {

    const [dataZ, setData] = useState([])

    const GetPostData = async () => {
        const res = await AllData()
        setData(res.data)
    }

    useEffect(() => {
        GetPostData()
    }, [])

    return (
        <>
            <div>
                <div className="m-20">
                    <p className="text-center text-5xl font-bold text-black">Axios Data</p>
                    <div className=" flex justify-center mt-10 ">
                        <div className=" grid  md:grid-cols-3 gap-5 ">
                            {
                                dataZ.map(information => <Details key={information.id} information={information}></Details>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Route
