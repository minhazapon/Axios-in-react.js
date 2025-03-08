import { useState } from "react"
import { AllData } from "./AxApi"
import { useEffect } from "react"


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

                    <p> Axios </p>

                </div>
            </div>
        </>
    )
}

export default Route
