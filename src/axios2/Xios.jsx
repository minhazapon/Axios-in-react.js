import { useEffect, useState } from "react"
import { Info } from "./DataFile"
import Xdeatils from "./Xdetails";


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
            <div className=" flex justify-center mt-10 ">
                <div className=" grid md:grid-cols-3 gap-5 ">
                    {
                        XData.map(cmntValue => <Xdeatils key={cmntValue.id} cmntValue={cmntValue}  ></Xdeatils>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Xios
