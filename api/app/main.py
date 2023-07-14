# This api will be requested by the Django app
from fastapi import FastAPI
from routers import translations

app = FastAPI()
app.include_router(translations.router)

# cors
from fastapi.middleware.cors import CORSMiddleware
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def hello():
    return {"message": "Hello World"}

