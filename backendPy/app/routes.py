from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.detection_service import detect_defects

router = APIRouter()

@router.post("/detect")
async def detect(image: UploadFile = File(...)):
    result = detect_defects(await image.read())
    if "error" in result:
        raise HTTPException(status_code=500, detail=result["error"])
    return result
