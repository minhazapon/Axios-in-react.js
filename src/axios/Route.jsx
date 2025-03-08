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
                    <p className="text-center text-5xl font-bold text-black">Axios Data</p>
                    <div>
                        <div>
                            {
                                dataZ.map(information => <ul key={information.id}>
                                    <div>
                                        <div className="card w-96 bg-black text-white card-md shadow-sm">
                                            <div className="card-body">
                                                <h2 className="card-title">{dataZ.title}</h2>
                                                <p>{dataZ.body}</p>
                                                <div className="justify-end card-actions">
                                                    <button className="btn bg-black text-white">Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Route
