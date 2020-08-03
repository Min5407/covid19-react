import { useState, useEffect } from "react";
import { fireStorage, db, timeStamp } from "../../firebase/firebase";

const UploadMessage = (fullMessage) => {
  const { image, user, message } = fullMessage;
  const [fileProgress, setFileProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  //   console.log(fullMessage);

  useEffect(() => {
    const createdAt = timeStamp();

    //reference
    if (image) {
      const storageRef = fireStorage.ref(image.name);
      const collectionRef = db.collection("message");

      storageRef.put(image).on(
        "state_changed",
        (snapshot) => {
          let progressPercentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setFileProgress(progressPercentage);
        },
        (error) => {
          console.log(error.message);
          setError(error);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          setUrl(url);

          console.log({ url, user, message, createdAt });
          collectionRef.add({ url, user, message, createdAt });
        }
      );
    } else {
      const collectionRef = db.collection("message");
      collectionRef.add({ url, user, message, createdAt });
    }
  }, [fullMessage]);
  return { fileProgress, error, url };
};

export default UploadMessage;
