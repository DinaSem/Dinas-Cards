import React, {ChangeEvent, useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {CardType, getCardsTC} from "../../m2-bll/cardsReducer1";
import {CardItem} from "./CardItem";
import {AppStoreType} from "../../m2-bll/store";
import {setPacksDataTC} from "../../m2-bll/packsReducer";

const CardsPage = () => {


    const cardsIsGot = useSelector<AppStoreType, CardType[]>(state => state.cards1.cards)
    const dispatch = useDispatch()
    const params = useParams()
    const packId = params.id
    const [searchValue, setSearchValue] = useState('')
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        dispatch(getCardsTC({packId}))
    }, [dispatch, getCardsTC])



    return (<div >
            Cards Page
            {cardsIsGot &&
                cardsIsGot.map(card =>  {
                    return <CardItem   key={card._id} card={card}/>
                })
            }
            </div>
    );
};

export default CardsPage;