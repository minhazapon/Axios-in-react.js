import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function Axios() {

    const [cycle, setCycle] = useState([])

    useEffect(() => {

        axios.get('https://raw.githubusercontent.com/minhazapon/Axios-in-react.js/refs/heads/main/public/axios.json')
            .then(res => {
                setCycle(res.data)

            })
            .catch((error) => {
                console.log(error)
            })

    }, [])


    return (
        <>

            <div>
                <div>



                </div>
            </div>

        </>
    )
}

export default Axios
