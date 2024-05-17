from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_detect_defects():
    with open("/home/lena/Документы/IT_PROJECT/camera-application/backend/data/i.png", "rb") as image_file:  # Убедитесь, что путь к изображению правильный
        response = client.post("/detect", files={"image": image_file})
    assert response.status_code == 200, response.text
    json_response = response.json()
    assert "defect" in json_response or "error" in json_response
