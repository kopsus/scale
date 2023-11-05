import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { LiaEditSolid } from "react-icons/lia"
import { RiDeleteBinLine } from "react-icons/ri"

const DetailPost = () => {
  const params = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    const config = {
      apiKey: import.meta.env.VITE_APIKEY,
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      "Content-Type": "application/json",
    }
    axios
      .get(`${import.meta.env.VITE_BASEURL}/api/v1/post/${params.id}`, {
        headers: config,
      })
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err))
  }, [params.id])

  return (
    <>
      <div className="FollowingPost" key={data?.id}>
        <div className="post w-full bg-base-100 shadow-xl">
          <Link className="FollowingPost_user">
            <div className="FollowingPost_user_img">
              <img src={data?.user?.profilePictureUrl} alt="asu" />
            </div>
            <p>{data?.user?.username}</p>
          </Link>

          <figure>
            <img src={data?.imageUrl} alt="Shoes" />
          </figure>
          <div className="caption">
            <p>{data?.caption}</p>
          </div>
          <div className="flex justify-end gap-10 my-3 mx-8">
            <label htmlFor="edit">
              <LiaEditSolid size={"2rem"} style={{ cursor: "pointer" }} />
            </label>
            <input type="checkbox" id="edit" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <img src={data?.imageUrl} />
                <p className="py-2">image</p>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full"
                />
                <p className="pt-8 pb-2">caption</p>
                <input
                  type="text"
                  placeholder={data?.caption}
                  className="input input-bordered w-full"
                />
                <div className="modal-action">
                  <label htmlFor="edit" className="btn">
                    Close!
                  </label>
                  <label
                    htmlFor="edit"
                    className="btn bg-primary text-white hover:bg-primary-focus"
                  >
                    Edit
                  </label>
                </div>
              </div>
            </div>

            <label htmlFor="delete">
              <RiDeleteBinLine size={"2rem"} style={{ cursor: "pointer" }} />
            </label>
            <input type="checkbox" id="delete" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg"></h3>
                <p className="py-4">Are You Sure Delete this Post ?</p>
                <div className="modal-action">
                  <label htmlFor="delete" className="btn">
                    Close!
                  </label>
                  <label
                    htmlFor="delete"
                    className="btn bg-red-500 text-white hover:bg-red-700"
                  >
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPost
