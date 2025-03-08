
function Details({ information }) {

    const { title, body } = information

    return (
        <div>

            <div className="card w-96 h-[500px] bg-black text-white card-md shadow-sm">
                <div className="">
                    <div>
                        <img className=" " src="https://s44885.pcdn.co/wp-content/uploads/2019/09/Fotolia_257957753_Subscription_Monthly_M.jpg" alt="" />
                    </div>
                    <div className=" p-5 ">
                        <h2 className="card-title">Title: {title} </h2>
                        <p className=" mt-6 ">Body: {body} </p>
                        <div className="justify-end card-actions">
                            <button className="btn bg-black text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
