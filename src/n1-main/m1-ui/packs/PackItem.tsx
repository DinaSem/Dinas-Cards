import React, {useCallback} from 'react'
import packsStyle from './PacksTable.module.css'
import {useNavigate} from "react-router-dom";
import {CardPacksType} from "../../m3-dal/packs-api";


type TableItemPropsType = {


    deletePackList: (packName: string, packId: string) => void
    // editPackList: (packName: string, packId: string) => void
    // learnPack: (packId: string) => void
    pack: CardPacksType
}

// export const PackItem = ({deletePackList, editPackList, learnPack, pack}: TableItemPropsType) => {
    export const PackItem = ({deletePackList, pack}: TableItemPropsType) => {
    const navigate = useNavigate()
    const onDeletePressHandler = useCallback(() => {
        deletePackList(pack.name, pack._id)
    }, [deletePackList, pack.name, pack._id])

    // const onEditPressHandler = useCallback(() => {
    //     editPackList(pack.name, pack._id)
    // }, [editPackList, pack.name, pack._id])
    //
    // const onLearnPressHandler = useCallback(() => {
    //     learnPack(pack._id)
    // }, [learnPack, pack._id])

    return (
        <div >
            <span style={{cursor: "pointer", minWidth: "50px"}} onClick={() => navigate('/packs/' + pack._id)}>{pack.name}</span>
            <span style={{margin: "10px", minWidth: "50px"}}>{pack.name}</span>
            <span style={{margin: "10px", minWidth: "50px"}}>{pack.cardsCount}</span>
            <span style={{margin: "10px", minWidth: "50px"}}> {pack.created}</span>

            <div>
                <button style={{minWidth: "47px",backgroundColor:'red'}}onClick={onDeletePressHandler}>Delete</button>
                {/*<button style={{minWidth: "47px"}} onClick={onEditPressHandler}>Edit</button>*/}
                {/*<button style={{minWidth: "47px"}} onClick={onLearnPressHandler}>Learn</button>*/}
            </div>

        </div>
    )
}