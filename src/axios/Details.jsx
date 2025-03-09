
function Details({ information, handleDelete, handleUpdate }) {

    const { id, title, body } = information

    return (
        <div>
            <div className="card w-96 h-[550px] bg-black text-white card-md shadow-sm">
                <div className="">
                    <div>
                        <img className=" " src="https://s44885.pcdn.co/wp-content/uploads/2019/09/Fotolia_257957753_Subscription_Monthly_M.jpg" alt="" />
                    </div>
                    <div className=" p-5 ">
                        <h2 className="card-title">ID: {id} </h2>
                        <h2 className="card-title">Title: {title} </h2>
                        <p className=" mt-6 ">Body: {body} </p>
                        <div className=" flex justify-end items-center gap-2 mt-5">
                            <button onClick={() => handleUpdate()} className="btn bg-black text-white">EDIT</button>
                            <button onClick={() => handleDelete(id)} className="btn bg-red-600 text-white">DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
