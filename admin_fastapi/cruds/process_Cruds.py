# from fastapi import HTTPException

from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession

from models.process_Models import Process


## User
async def get_processes(db: AsyncSession) -> list[Process]:
    query = await db.execute(select(Process))
    processes = query.scalars().all()

    return processes


async def get_process_by_id(db: AsyncSession, id: int) -> Process:
    query = await db.execute(select(Process).where(Process.id == id))
    proces = query.scalar_one_or_none()

    return proces


async def add_process(db: AsyncSession, process: Process) -> Process:
    db_process = Process(user_id=process.user_id,
                        customer_name=process.customer_name,
                        customer_surname=process.customer_surname,
                        process_name=process.process_name,
                        process_price=process.process_price,
                        process_quantity=process.process_quantity)
    
    db.add(db_process)
    await db.commit()
    await db.refresh(db_process)

    return db_process


async def update_process(db: AsyncSession, process: Process, id: int):
    db_process = await get_process_by_id(db, id)
    
    db_process.customer_name=process.customer_name
    db_process.customer_surname=process.customer_surname
    db_process.process_name = process.process_name
    db_process.process_price = process.process_price
    db_process.process_quantity = process.process_quantity


    await db.commit()
    await db.refresh(db_process)

    return db_process


# async def delete_role(db: AsyncSession, id: int) -> Role:
#     db_role = await get_role_by_id(db, id)

#     if db_role is None:
#         raise HTTPException(status_code=404, detail='Role not found!')

#     await db.delete(db_role)
#     await db.commit()

#     return db_role