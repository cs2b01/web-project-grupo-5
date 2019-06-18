from sqlalchemy import Column, Integer, String, Sequence, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from database import connector

class User(connector.Manager.Base):
    __tablename__ = 'Usuarios'
    id = Column(Integer, Sequence('user_id_seq'), primary_key=True)
    name = Column(String(50))
    lastname = Column(String(50))
    password = Column(String(12))
    email = Column(String(40))

class Equipo(connector.Manager.Base):
    __tablename__ = 'Equipo'
    id = Column(Integer,Sequence(''), primary_key=True)
    nombre = Column(String(10))
    puntos= Column(Integer)
    prox_rival = Column(String(10))
    mvp = Column(String(20))

class Partidos(connector.Manager.Base):
    __tablename__ = 'Partidos'
    id = Column(Integer, Sequence('user_id_seq'), primary_key=True)
    equipo = Column(String(20))
    equipo_contrario = Column(String(20))
    ganador = Column(String(20))
