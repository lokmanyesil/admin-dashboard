# from fastapi import HTTPException

from sqlmodel import select, func
from sqlmodel.ext.asyncio.session import AsyncSession


from models.user_Models import User
from fastapi import HTTPException, status

## User
async def get_users(db: AsyncSession) -> list[User]:
    query = await db.execute(select(User))
    users = query.scalars().all()

    return users

#Girilen Email kontrol eder
async def get_user_by_email(db: AsyncSession, user_email: str) -> User:
    query = await db.exec(select(User).where(func.lower(User.user_mail) == func.lower(user_email)))
    user = query.first()

    if user is None:
        return False

    return user




async def login(db: AsyncSession, user_email: str, password: str):
    db_user: User = await get_user_by_email(db, user_email)

    if db_user:
        if (db_user.user_password != password):  ## Password dogrulama
            return False  

        else:
            return True
    else :
        return False 

async def add_user(db: AsyncSession, user: User) -> User:
    db_user = User(user_name=user.user_name,
                   user_surname=user.user_surname,
                   user_mail=user.user_mail,
                   user_password=user.user_password)
    
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)

    return db_user


# async def update_role(db: AsyncSession, role: Role, id: int):
#     db_role = await get_role_by_id(db, id)

#     if db_role is None:
#         raise HTTPException(status_code=404, detail='Role not found!')
    
#     db_role.name = role.name

#     await db.commit()
#     await db.refresh(db_role)

#     return db_role


# async def delete_role(db: AsyncSession, id: int) -> Role:
#     db_role = await get_role_by_id(db, id)

#     if db_role is None:
#         raise HTTPException(status_code=404, detail='Role not found!')

#     await db.delete(db_role)
#     await db.commit()

#     return db_role