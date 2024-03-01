from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import user_Router, process_Router

from db import init_db

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(user_Router.router)
app.include_router(process_Router.router)

## Her proje başladığında çalışacak fonksiyon
@app.on_event("startup")
async def on_startup():
    await init_db()


@app.get("/ping")
async def pong():
    return {"ping": "pong!"}

#alembic revision --autogenerate -m "create user table" (create migration file)
#alembic upgrade head (run migration)