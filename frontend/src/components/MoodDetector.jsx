import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import "./MoodDetector.css";

const MoodDetector = () => {
  const videoRef = useRef(null);

  const [expression, setExpression] = useState("");

  // Load models once
  const loadModels = async () => {
    const MODEL_URL = "/models";
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
    ]);
    console.log("Models loaded");
  };

  // Start the webcam
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error("Camera error:", err));
  };

  // Detect mood on button click
  const detectMood = async () => {
    try {
      const video = videoRef.current;
      if (!video || video.readyState !== 4) {
        console.warn("Video not ready yet");
        return;
      }

      console.log("Detecting mood...");
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();




      if (detections[0]) {
        const expressions = detections[0].expressions;
        const mood = Object.entries(expressions).reduce(
          (max, curr) => (curr[1] > max[1] ? curr : max)
        )[0];
        setExpression(mood);
        console.log("Detected mood:", expression);
      } else {
        setExpression("No face detected");
      }
    } catch (err) {
      console.error("Detection failed:", err);
    }
  };

  // Load models and start webcam on mount
  useEffect(() => {
    loadModels().then(startVideo);
  }, []);

  return (



    <div className="mood-detector-container">
      <video
        className="mood-detector-video"
        ref={videoRef}
        autoPlay
        muted


      />
      <button onClick={detectMood}>   Detect Mood </button>



    </div>





  );
};

export default MoodDetector;
