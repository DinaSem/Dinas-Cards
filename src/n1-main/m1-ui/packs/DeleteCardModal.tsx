import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {deleteCardTC} from "../../m2-bll/cardsReducer1";
import {Modal} from "./Modal";


type DeleteCardModalPropsType = {
    show: boolean
    setShow: (value:boolean)=>void
    cardId: string
}

export const DeleteCardModal = ({show, setShow , cardId}: DeleteCardModalPropsType) => {

    const dispatch = useDispatch()
    const onClickDeleteCards = () => {
        dispatch(deleteCardTC(cardId))
        setShow(false)
    }
    return (
        <>
            <button onClick={() => setShow(true)}>Delete</button>
            <Modal
                enableBackground={true}
                backgroundOnClick={() => setShow(false)}
                width={400}
                height={400}
                show={show}
            >
                <h2>Delete card</h2>
                <div>You really want to delete this card?</div>
                <button onClick={onClickDeleteCards}>Delete</button>
                <button onClick={() => setShow(false)}>Close</button>
            </Modal>
        </>
    );
};