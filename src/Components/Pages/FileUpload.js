import React, { Fragment, useState, useEffect } from "react";
import Message from "./Message";
import axios from "axios";

function FileUpload({takePic}) {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", "Ishita");
    console.log(formData.get("file"));

    try {
      const response = await axios.post("/user/upload", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      console.log("response", response);
      const { fileName, filePath } = response.data;

      setUploadedFile({ fileName, filePath });
      takePic(true);

      // setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <div>
          <input
            type="file"
            className="file-input"
            id="customFile"
            name="file"
            onChange={onChange}
            accept=".jpg, .jpeg, .png"
          />
          {/* <label className="file-label" htmlFor="customFile">
            {filename}
          </label> */}
        </div>

        <input type="submit" value="Upload" className="btn " />
      </form>
      {uploadedFile ? (
        <div>
          <div>
            {/* <h3 className="text-center">{uploadedFile.fileName}</h3> */}
            {/* <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" /> */}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default FileUpload;
