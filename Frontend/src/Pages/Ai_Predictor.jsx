import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = new GoogleGenerativeAI( "");

const ImageAnalyzer = () => {
  const [image, setImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setAnalysisResult(null);
    }
  };

  const analyzeImage = async () => {
    if (!image) {
      alert("Please upload an image first!");
      return;
    }

    setLoading(true);
    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64Image = reader.result.split(",")[1];

      try {
        const genAI = new GoogleGenerativeAI("AIzaSyDrrABRroUJfyh3W9nuG43DPMdDcKke14c");
        const model = await genAI.getGenerativeModel({
          model: "gemini-3-flash-preview",
        });

        const result = await model.generateContent([
          {
            text: `Analyze this image and extract details about its recyclability. Provide a structured JSON response **without markdown formatting** with these fields:
            {
              "material": "Material type",
              "price": "Estimated price you can get after submitting to recycling, show the cost in Indian rupees with unit as Rs/Kg",
              "ideas": ["Give 2-3 very good reuse ideas in concise bullet points"],
              "isRecyclable": "Yes/No",
              "ways": "Ways to recycle"
            }
            Return only valid JSON, no extra text.`,
          },
          {
            inlineData: { mimeType: "image/jpeg", data: base64Image },
          },
        ]);

        let responseText = await result.response.text(); 
        responseText = responseText.replace(/```json|```/g, "").trim();
        setAnalysisResult(JSON.parse(responseText));
      } catch (error) {
        console.error("Error analyzing image:", error.message);
      } finally {
        setLoading(false);
      }
    };

    reader.readAsDataURL(image);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] p-6 bg-gray-100">
      <div
        className={`bg-white shadow-xl border-2 rounded-lg p-6 w-full transition-all duration-300 ${
          analysisResult ? "max-w-4xl" : "max-w-md"
        }`}
      >
        <h2 className="text-3xl font-bold text-green-600 text-center mb-4">
          ♻️ Recyclability Analyzer
        </h2>

        <div
          className={`flex flex-col items-center ${
            analysisResult ? "md:flex-row gap-6" : ""
          }`}
        >
          {/* Image Upload Section (Centered before analysis) */}
          <div
            className={`flex flex-col items-center w-full ${
              analysisResult ? "md:w-1/2" : ""
            }`}
          >
            <label className="block w-full cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className="border-2 border-dashed border-green-600 p-6 rounded-lg hover:bg-gray-300 transition text-center">
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Uploaded"
                    className="w-full h-48 object-cover rounded-lg mx-auto"
                  />
                ) : (
                  <p className="text-green-400 font-medium">
                    📸 Click to Upload Image
                  </p>
                )}
              </div>
            </label>

            <button
              onClick={analyzeImage}
              disabled={loading}
              className="w-full bg-green-700 text-white mt-4 py-2 rounded-lg hover:bg-green-800 transition-all disabled:bg-gray-400"
            >
              {loading ? "Analyzing..." : "Analyze Image"}
            </button>

            {loading && (
              <div className="mt-4">
                <div className="w-6 h-6 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-gray-600 mt-2">Processing...</p>
              </div>
            )}
          </div>

          {/* Analysis Result Section (Appears Side-by-Side after analysis) */}
          {analysisResult && (
            <div className="w-full md:w-1/2 p-4 bg-green-50 border-l-4 border-green-600 rounded-lg text-left">
              <h3 className="text-lg font-semibold text-green-700 mb-3">
                ♻️ Analysis Result:
              </h3>
              <ul className="text-gray-800 space-y-2">
                <li>
                  <strong>🔄 Recyclable:</strong> {analysisResult.isRecyclable}
                </li>
                <li>
                  <strong>🛠 Material:</strong> {analysisResult.material}
                </li>
                <li>
                  <strong>💰 Price:</strong> {analysisResult.price}
                </li>
                <li>
                  <strong>🧠 Ideas to Reuse:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {analysisResult.ideas &&
                      analysisResult.ideas.map((idea, index) => (
                        <li key={index}>{idea}</li>
                      ))}
                  </ul>
                </li>
                <li>
                  <strong>🔄 Ways to Recycle:</strong> {analysisResult.ways}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageAnalyzer;
