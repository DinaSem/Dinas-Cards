import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {Modal} from "./Modal";
import {editCardTC} from "../../m2-bll/cardsReducer1";

type EditCardModalPropsType = {
    show: boolean
    setShow: (value:boolean)=>void
    cardId: string
}

export const EditCardModal = ({show, setShow , cardId}: EditCardModalPropsType) => {
    const [quest, setQuest] = useState('')
    const dispatch = useDispatch()


    const onClickEditCards = () => {
        dispatch(editCardTC(cardId, quest))
        setShow(false)
        setQuest('')
    }

    const onQuestionInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuest(e.currentTarget.value)
    }

    return (
        <>
            <button onClick={() => setShow(true)}>Edit</button>
            <Modal
                enableBackground={true}
                backgroundOnClick={() => setShow(false)}
                width={400}
                height={400}
                show={show}
            >
                <h2>Edit card</h2>
                <div>New question:</div>
                <div style={{margin:'10px'}}> <input type='text' onChange={onQuestionInputChange}/></div>

                <button onClick={onClickEditCards}>Save</button>
                <button onClick={() => setShow(false)}>Close</button>
            </Modal>
        </>
    );
};