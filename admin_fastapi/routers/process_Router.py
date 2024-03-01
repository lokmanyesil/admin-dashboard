from fastapi import Depends, APIRouter
from sqlmodel.ext.asyncio.session import AsyncSession

from cruds import process_Cruds
from models.process_Models import Process, process_log

from db import get_session

router = APIRouter(tags=['process'])


## GET METHODS (USER)
@router.get("/processes", response_model=list[Process])
async def get_processes(db: AsyncSession = Depends(get_session)):
    return await process_Cruds.get_processes(db)


@router.get("/get_process_by_id/{id}", response_model=Process)
async def get_processes(id: int, db: AsyncSession = Depends(get_session)):
    return await process_Cruds.get_process_by_id(db, id)


## POST METHODS (USER)
@router.post("/add_process", response_model=Process)
async def add_process(process: Process, db: AsyncSession = Depends(get_session)):
    return await process_Cruds.add_process(db, process)


@router.post("/update_process/{id}", response_model=process_log)
async def update_process(id: int, request: Process, db: AsyncSession = Depends(get_session)):
    return await process_Cruds.update_process(db, request, id)