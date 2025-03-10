import { useEffect, useState } from "react"
import { deletePost, Info } from "./DataFile"
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

    //delete section
    const handleDelete = async (id) => {
        try {

            const res = await deletePost(id);
            if (res.status === 200) {
                const DeletePostData = XData.filter(DataValue => {
                    return DataValue.id !== DataValue
                })
                setData(DeletePostData)
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="m-10">
            <p className=" text-2xl text-center text-black">All Axios Comments</p>
            <div className=" flex justify-center ">
                <div className=" flex justify-center mt-10 border-[1px] p-5 w-fit rounded-xl bg-violet-50 ">
                    <form className=" flex-col md:flex-row lg:flex-row flex items-center gap-3 ">
                        <input
                            required
                            className=" h-[30px] w-[300px] p-2 border-[1px]"
                            name="title"
                            placeholder="Add Title"
                            type="text" />
                        <input
                            required
                            className="h-[30px] w-[300px] p-2 border-[1px]"
                            name="body"
                            placeholder="Add Body"
                            type="text" />
                        <input className=" bg-blue-900 text-white h-[30px] w-[300px] cursor-pointer " type="submit" value="Add" />
                    </form>
                </div>
            </div>

            <div className=" flex justify-center mt-10 ">
                <div className=" grid md:grid-cols-3 gap-5 ">
                    {
                        XData.map(cmntValue => <Xdeatils key={cmntValue.id} cmntValue={cmntValue} handleDelete={handleDelete}  ></Xdeatils>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Xios
