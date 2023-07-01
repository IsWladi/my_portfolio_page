# This api will be requested by the Django app
from fastapi import FastAPI
from routers import translations

app = FastAPI()
app.include_router(translations.router)

@app.get("/")
async def hello():
    return {"message": "Hello World"}

