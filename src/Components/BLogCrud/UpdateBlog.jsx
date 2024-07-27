import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const UpdateBlog = ({ color }) => {
  const { id } = useParams();
  const [data, setDat] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/blog/" + id)
      .then((e) => {
        setDat(e.data);
      })
      .catch((e) => {
        console.log("errored when updata");
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/blog/" + id, data)
      .then((res) => {
        alert("succe");
        navigate("/");
      })
      .catch((e) => {
        console.log("error when updata");
      });
  };

  const handlevalueChange = (e) => {
    setDat({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="h-[100vh]" style={{ background: color.body }}>
      <div className="h-[100px]">
        <Link>
          <Link to={`/read/${id}`}>
            <button
              style={{ background: color.sub, color: color.text }}
              className="p-3 ml-3 mt-3"
            >
              Back
            </button>
          </Link>
        </Link>

        <Link to="/">
          <button
            style={{ background: color.text, color: color.body }}
            className="p-3 ml-3 mt-3 "
          >
            Home
          </button>
        </Link>
      </div>
      <div className="m-auto w-[80vw]">
        <div className="">update Your BLog</div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="titile"
                value={data.titile}
                onChange={handlevalueChange}
                placeholder="enterheading"
                style={{ background: color.text, color: color.body }}
                className=" mt-2 shadow shadow-black md:w-[40vw] w-[80vw] h-[50px] pl-4 "
              />
            </div>
            <div>
              <textarea
                cols="
                "
                rows="10"
                type="text"
                name="body"
                onChange={handlevalueChange}
                value={data.body}
                placeholder="textyourBlog"
                style={{ background: color.body, color: color.text }}
                className=" mt-5 shadow-black shadow h-[50vh] md:w-[40vw] w-[80vw] p-5"
              ></textarea>
            </div>
            <div className="flex justify-end w-[40vw]">
              <button
                style={{ background: color.sub, color: color.text }}
                className="p-3 ml-3 mt-3 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
