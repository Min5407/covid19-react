import React, { useRef, useState, useEffect } from "react";
import "./chatTextfield.style.scss";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

const ChatTextField = () => {
  const [message, setMessage] = useState("");
  const [inputState, setInputState] = useState(true);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (message !== "" || image) {
      setInputState(false);
    } else if (message === "") {
      setInputState(true);
    }
  }, [message, image]);

  const handleFileInputClick = () => {
    inputFileRef.current.click();
  };

  const inputMessage = (e) => {
    setMessage(e.target.value);
  };

  const setFile = (event) => {
    setImage(event.target.files[0].name);
  };

  const inputFileRef = useRef(null);
  return (
    <div className="chatTextField">
      <h3>{message}</h3>
      <input
        style={{ display: "none" }}
        onChange={setFile}
        type="file"
        accept="image/*"
        ref={inputFileRef}
      />
      <div className="textField"> messages</div>
      <div className="input">
        <IconButton onClick={handleFileInputClick} aria-label="add">
          <AddIcon />
        </IconButton>
        <input
          name={message}
          value={message}
          onChange={inputMessage}
          type="text"
        ></input>
        <div>
          <Button
            disabled={inputState}
            color="primary"
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatTextField;
