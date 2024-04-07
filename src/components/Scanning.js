import * as ml5 from "ml5";
import Webcam from "react-webcam";
import { useEffect, useRef, useState } from "react"; // Import useState
import './Scanning.css';
import avo from './avo.gif';
import sando from './sand.gif';
import eggo from './egg.gif';
import chicko from './chick.gif';
import { useNavigate } from 'react-router-dom';


const dimensions = {
  width: 800,
  height: 500
};

function Scanning() {
    const navigate = useNavigate();
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [detectedItems, setDetectedItems] = useState([]); // State to store filtered detections
    const { width, height } = dimensions;

    useEffect(() => {
      let detectionInterval;

      const modelLoaded = () => {
        webcamRef.current.video.width = width;
        webcamRef.current.video.height = height;
        canvasRef.current.width = width;
        canvasRef.current.height = height;

        detectionInterval = setInterval(() => {
          detect();
        }, 200);
      };

      const objectDetector = ml5.objectDetector('cocossd', modelLoaded);

      const detect = () => {
        if (webcamRef.current && webcamRef.current.video.readyState === 4) {
          objectDetector.detect(webcamRef.current.video, (err, results) => {
            if (err) {
              console.error(err);
              return;
            }
            const filteredResults = results.filter(({ label }) => 
              ["apple", "banana", "bottle", "broccoli", "sandwich", "orange", "carrot","hot dog","pizza"].includes(label.toLowerCase())
            );

            // Optionally, prevent duplicates by checking existing labels in detectedItems
            const newItems = filteredResults.map(({ label }) => label)
              .filter(label => !detectedItems.includes(label));

            if (newItems.length > 0) {
              setDetectedItems(prevItems => [...prevItems, ...newItems]);
            }

            // Drawing detections (optional based on your requirements)
            const ctx = canvasRef.current.getContext('2d');
            ctx.clearRect(0, 0, width, height);
            filteredResults.forEach(({ label, x, y, width, height }) => {
              ctx.beginPath();
              ctx.font = "24px Arial"; 
              ctx.fillStyle = "#FF0000";
              ctx.fillText(label, x, y - 5);
              ctx.rect(x, y, width, height);
              ctx.stroke();
            });
          });
        }
      };

      return () => clearInterval(detectionInterval);
    }, [width, height, detectedItems]); // Include detectedItems in the dependency array if filtering duplicates
    const goToRecipePage = () => {
        // Check if all items for Page A are detected
        const pageAItems = ['bottle', 'banana', 'apple'];
        const canNavigateToPageA = pageAItems.every(item => detectedItems.includes(item));
      
        // Check if all items for Page B are detected
        const pageBItems = ['hot dog', 'carrot', 'broccoli'];
        const canNavigateToPageB = pageBItems.every(item => detectedItems.includes(item));
      
        if (canNavigateToPageA) {
          navigate('/second'); // Navigate to Page A
        } else if (canNavigateToPageB) {
          navigate('/first'); // Navigate to Page B
        } else {
          alert('Required items not detected for any recipe');
        }
      };
      
    return (
        <div className="container">
            <Webcam ref={webcamRef} className="webcam" />
            <canvas ref={canvasRef} className="canvas" />
            {/* Apply the CSS class to the list of detected items */}
            <ul className="detected-items-list">
                {detectedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button className="action-button" onClick={goToRecipePage}>Go to recipe</button>

            <div className="gifs-container">
            <img src={avo} alt="GIF 1" />
            <img src={chicko} alt="GIF 2" />
            <img src={eggo} alt="GIF 3" />
            <img src={sando} alt="GIF 4" />
        </div>
        </div>
    );
    
}

export default Scanning;
