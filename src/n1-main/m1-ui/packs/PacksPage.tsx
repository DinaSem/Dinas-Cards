import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../m2-bll/store";
import {PacksGetRequestType, PacksGetResponseDataType} from "../../m3-dal/packs-api";
import {addPacksTC, deletePackTC, pickDeletePackAC, setPacksDataTC, statePacksType} from "../../m2-bll/packsReducer";
import {PackItem} from "./PackItem";
import {LoadingStatusType} from "../../m2-bll/loadingReducer";
import {useParams} from "react-router-dom";
// import {PackItem} from "./PackItem";
// import {PacksGetResponseDataType} from "../../../../m3-dal/packs-api";
// import l from "../../../common/c7-Loading/loader07.module.css";
// import {LoadingStatusType} from "../../../../m2-bll/loadingReducer";
// import Paginator from "../../../common/c9-Pagination/Paginator";
// import ModalDeleteContainer from "../../../../../n2-features/f3-utils/Modal/ModalDeleteContainer";
// import ModalEditContainer from "../../../../../n2-features/f3-utils/Modal/ModalEditContainer";
//
// type PacksTableType = {
//     deletePack: (packName: string, pack: string) => void
//     deletePackList: (packName: string, packId: string) => void
//     showDeletePack: (value: boolean) => void
//     deletePackId: string
//     deletePackName: string
//     // editPack: (packId: string, namePack: string) => void
//     // editPackList: (packName: string, packId: string) => void
//     // showEditPack: (value: boolean) => void
//     // editPackId: string
//     // editPackName: string
//     // learnPack: (packId: string) => void
//     packs: PacksGetResponseDataType
//     isLoading: LoadingStatusType
//     isShownEditPack: boolean
//     isShownDeletePack: boolean
//     currentPage: number
//     onPageChanged: (pageNumber: number) => void
// }


export const PacksPage = () => {
const packs = useSelector<AppStoreType,PacksGetResponseDataType|undefined>(state => state.packs.packsData)

    const packName = useSelector<AppStoreType, any>(state => state.packs.packName)
    const user = useSelector<AppStoreType>(state => state.login.user)
    const dispatch = useDispatch()


        const [checked, setChecked] = useState(false);

        const changeCheckbox=()=> {
            setChecked(!checked);
        }
        const addPacksOnClick = () => {
    dispatch(addPacksTC({
        cardsPack: {
            name: 'Dina-packs'
        }
    }))
}
// // Block for Delete pack
//     const deletePackList = useCallback((packName: any, packId: string) => {
//         dispatch(pickDeletePackAC(packName, packId))
//         // dispatch(showDeletePackAC(true))
//     }, [dispatch,])
//
    const deletePack = useCallback((packName: string, packId: string) => {
        dispatch(deletePackTC({params: {id: packId}}))
    }, [dispatch])
//
//     const showDeletePack = useCallback((value: boolean) => {
//         // dispatch(showDeletePackAC(value))
//     },[dispatch])
// //-------------


        
    useEffect(() => {
if(checked){
    dispatch(setPacksDataTC({
        // briefly hardcoded 1 Cards request
        params: {
            // packName: 'english',
            // pageCount: 5,
            // user_id: "622af9b229bee90004696543"
            // @ts-ignore
            user_id: user._id
        }
    }))
}},[dispatch, setPacksDataTC,checked])

    useEffect(() => {
        if(!checked){
            dispatch(setPacksDataTC({
                params: {
                    //packName: 'english',
                    pageCount: 20
                }
            }))
        }
    }, [dispatch, setPacksDataTC,checked])

    return (
        <div>
            PacksPage
            <div>
                <input style={{height: "20px", width: "20px"}} type="checkbox" checked={checked} onChange={changeCheckbox} />
                <span>My packs</span>
                <span>
                    <button style={{margin: " 0 20px"}} onClick={addPacksOnClick}>add</button>
                </span>

            </div>

            {packs?.cardPacks &&
            packs.cardPacks.map((pack) => {
                    return (

                        <PackItem   key={pack._id}
                                  deletePackList={deletePack}
                                  // editPackList={editPackList}
                                  // learnPack={learnPack}
                                  pack={pack}
                        />
                    )
                }
            )}


            {/*{packsData.cardPacks &&*/}
            {/*<div>*/}
            {/*    <span style={{margin: "0 20px"}}>{packsData.cardPacks[0].name}</span>*/}
            {/*    <span style={{margin: "0 20px"}}>{packsData.cardPacks[0].cardsCount}</span>*/}
            {/*    <span style={{margin: "0 20px"}}>{packsData.cardPacks[0].updated}</span>*/}

            {/*</div>*/}
            {/*}*/}

            {/*{packs&& packs.cardPacks.map((pack) => {*/}
            {/*        debugger*/}
            {/*            return (<div key={pack._id}>{pack.name}</div>)*/}
            {/*    }*/}
            {/*    )}*/}
        </div>
    )
}