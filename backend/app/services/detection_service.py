from tensorflow.keras.models import load_model
import numpy as np
import cv2
import os

# Получение абсолютного пути к файлу модели
model_path = '/home/lena/Документы/IT_PROJECT/camera-application/backend/models/defect_detection_model.h5'

# Глобальная переменная для модели
model = None

try:
    model = load_model(model_path)
    print("Model loaded successfully")
except Exception as e:
    print(f"Error loading model: {e}")

def detect_defects(image_bytes):
    global model  # Убедитесь, что модель доступна глобально
    if model is None:
        print("Model is not loaded")
        return {"error": "Model is not loaded"}

    try:
        nparr = np.frombuffer(image_bytes, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        if img is None:
            print("Error decoding image")
            return {"error": "Error decoding image"}
        img = cv2.resize(img, (128, 128))
        img = np.expand_dims(img, axis=0) / 255.0
        predictions = model.predict(img)
        predicted_label = np.argmax(predictions)
        return {"defect": bool(predicted_label)}
    except Exception as e:
        print(f"Error during detection: {e}")
        return {"error": f"Error during detection: {e}"}
