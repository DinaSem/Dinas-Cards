import React, {useCallback} from 'react'
import packsStyle from './PacksTable.module.css'
import {useNavigate} from "react-router-dom";
import {CardPacksType} from "../../m3-dal/packs-api";


type TableItemPropsType = {


    // deletePackList: (packName: string, packId: string) => void
    // editPackList: (packName: string, packId: string) => void
    // learnPack: (packId: string) => void
    pack: CardPacksType
}
export const PackItem = (props:TableItemPropsType)=>{
    const navigate = useNavigate()
// export const PackItem = ({deletePackList, editPackList, learnPack, pack}: TableItemPropsType) => {
    // const navigate = useNavigate()
    // const onDeletePressHandler = useCallback(() => {
    //     deletePackList(pack.name, pack._id)
    // }, [deletePackList, pack.name, pack._id])
    //
    // const onEditPressHandler = useCallback(() => {
    //     editPackList(pack.name, pack._id)
    // }, [editPackList, pack.name, pack._id])
    //
    // const onLearnPressHandler = useCallback(() => {
    //     learnPack(pack._id)
    // }, [learnPack, pack._id])

    return (
        <div >
            <span style={{cursor: "pointer", minWidth: "50px"}} onClick={() => navigate('/packs/' + props.pack._id)}>{props.pack.name}</span>
            <span style={{margin: "10px", minWidth: "50px"}}>{props.pack.user_name}</span>
            <span style={{margin: "10px", minWidth: "50px"}}>{props.pack.cardsCount}</span>
            <span style={{margin: "10px", minWidth: "50px"}}> {props.pack.created}</span>

            <div>
                {/*<SuperButton style={{minWidth: "47px",backgroundColor:'red'}}onClick={onDeletePressHandler}>Delete</SuperButton>*/}
                {/*<SuperButton style={{minWidth: "47px"}} onClick={onEditPressHandler}>Edit</SuperButton>*/}
                {/*<SuperButton style={{minWidth: "47px"}} onClick={onLearnPressHandler}>Learn</SuperButton>*/}
            </div>

        </div>
    )
}