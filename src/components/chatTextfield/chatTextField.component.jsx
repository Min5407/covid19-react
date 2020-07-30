import React, { useRef } from "react";
import "./chatTextfield.style.scss";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

const ChatTextField = () => {
  const handleFileInputClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click();
  };

  const inputFileRef = useRef(null);
  return (
    <div className="chatTextField">
      <input style={{ display: "none" }} type="file" ref={inputFileRef} />
      <div className="textField"> messages</div>
      <div className="input">
        <IconButton onClick={handleFileInputClick} aria-label="add">
          <AddIcon />
        </IconButton>
        <input type="text"></input>
        <div>
          <Button
            disabled={true}
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
