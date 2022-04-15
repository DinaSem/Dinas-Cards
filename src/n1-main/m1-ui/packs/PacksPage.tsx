import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../m2-bll/store";
import {PacksGetRequestType, PacksGetResponseDataType} from "../../m3-dal/packs-api";
import {setPacksDataTC} from "../../m2-bll/packsReducer";
import {PackItem} from "./PackItem";
// import {PackItem} from "./PackItem";
// import {PacksGetResponseDataType} from "../../../../m3-dal/packs-api";
// import l from "../../../common/c7-Loading/loader07.module.css";
// import {LoadingStatusType} from "../../../../m2-bll/loadingReducer";
// import Paginator from "../../../common/c9-Pagination/Paginator";
// import ModalDeleteContainer from "../../../../../n2-features/f3-utils/Modal/ModalDeleteContainer";
// import ModalEditContainer from "../../../../../n2-features/f3-utils/Modal/ModalEditContainer";
//
// type PacksTableType = {
// //     deletePack: (packName: string, pack: string) => void
// //     deletePackList: (packName: string, packId: string) => void
// //     showDeletePack: (value: boolean) => void
// //     deletePackId: string
// //     deletePackName: string
// //     editPack: (packId: string, namePack: string) => void
// //     editPackList: (packName: string, packId: string) => void
// //     showEditPack: (value: boolean) => void
// //     editPackId: string
// //     editPackName: string
// //     learnPack: (packId: string) => void
//     packs: PacksGetResponseDataType
//     // isLoading: LoadingStatusType
//     // isShownEditPack: boolean
//     // isShownDeletePack: boolean
//     // currentPage: number
//     // onPageChanged: (pageNumber: number) => void
// }


export const PacksPage = () => {
const packs = useSelector<AppStoreType,PacksGetResponseDataType|undefined>(state => state.packs.packsData)
    const packsData = useSelector<AppStoreType, PacksGetResponseDataType>(state => state.packs.packsData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPacksDataTC({


            params: {
                //packName: 'english',
                pageCount: 20
            }
        }))
    }, [dispatch, setPacksDataTC])

    return (
        <div>
            PacksPage

            {packs?.cardPacks &&
            packs.cardPacks.map((pack) => {
                    return (

                        <PackItem  key={pack._id}
                                  // deletePackList={deletePackList}
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