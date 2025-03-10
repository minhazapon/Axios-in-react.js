import { useEffect, useState } from "react"
import { Info } from "./DataFile"


function Xios() {

    const [XData, setData] = useState([])

    const GetAllData = async () => {
        const res = await Info();
        setData(res.data)
    }

    useEffect(() => {
        GetAllData();
    }, [])

    return (
        <div className="m-10">

            <p className=" text-2xl text-center text-black">All Axios Comments</p>

            <div>
                <div>
                    {
                        XData.map(cmntValue => <Comments key={cmntValue.id} XData={XData} ></Comments>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Xios
