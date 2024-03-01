from fastapi import Depends, APIRouter
from sqlmodel.ext.asyncio.session import AsyncSession

from cruds import user_Cruds
from models.user_Models import user_log, User

from db import get_session

router = APIRouter(tags=['user'])

## GET METHODS (USER)
@router.get("/users", response_model=list[user_log])
async def get_users(db: AsyncSession = Depends(get_session)):
    return await user_Cruds.get_users(db)


## POST METHODS (USER)
@router.post("/add_user", response_model=User)
async def add_user(user: User, db: AsyncSession = Depends(get_session)):
    return await user_Cruds.add_user(db, user)

## POST METHODS (USER)
@router.post("/login")
async def login(user_email, password, db: AsyncSession = Depends(get_session)):
    return await user_Cruds.login(db, user_email, password)