import React from 'react'

import {CardType} from "../../m2-bll/cardsReducer1";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../m2-bll/store";
import {UserDataType} from "../../m2-bll/loginReducer";
import {DeleteCardModal} from "./DeleteCardModal";
import {EditCardModal} from "./EditCardModal";


type CardItemPropsType = {
    card: CardType
    show: boolean
    setShow: (value: boolean) => void
    editShow:boolean
    setEditShow: (value: boolean) => void
}

export const CardItem = ({card,show,setShow,editShow,setEditShow }: CardItemPropsType) => {
    const user = useSelector<AppStoreType, UserDataType | null>(state => state.login.user)

    return (
        <div>
            <span style={{cursor: "pointer", minWidth: "50px", margin:"10px" }}>{card.question}</span>
            <span style={{cursor: "pointer", minWidth: "50px", margin:"10px"}}>{card.answer}</span>
            {/*<div>{changeDateView(card.updated)}</div>*/}
            <span style={{cursor: "pointer", minWidth: "50px", margin:"10px"
            }}>{card.grade}</span>
            <div>
                {card.user_id === user?._id && <DeleteCardModal show={show} setShow={setShow} cardId={card._id}/>}
                {card.user_id === user?._id && <EditCardModal show={editShow} setShow={setEditShow} cardId={card._id} />}
            </div>
        </div>
    )
}