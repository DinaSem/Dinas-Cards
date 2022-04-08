import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {changeUserNameTC} from "../../../n1-main/m2-bll/profileReducer";
import {resetNewPasswordTC} from "../../../n1-main/m3-dal/recoverReducer";

const ProfilePage = () => {
    const userName = useSelector<AppStoreType, string | undefined>((state) => state.login.user?.name)
    const avatar = useSelector<AppStoreType, string | undefined>((state) => state.login.user?.avatar)
    const userEmail = useSelector<AppStoreType, string | undefined>((state) => state.login.user?.email)
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const dispatch = useDispatch()
    const [nameFromInput, setNameFromInput] = useState<string>('')
    const [avatarURL, setAvatarURL] = useState<string>('https://pp.userapi.com/jGv7TOlBU27T36CEVFjDzhsND_EYYj4j_Kotsg/OXRB67336xQ.jpg?ava=1')

    const NameChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setNameFromInput(e.currentTarget.value)
    }
    const AvatarChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setAvatarURL(e.currentTarget.value)
    }

    const onKeyPressHandler = useCallback(() => {
        dispatch(changeUserNameTC(nameFromInput, avatarURL))
    }, [dispatch, nameFromInput, avatarURL])

    useEffect(() => {
        userName && setNameFromInput(userName)
        avatar && setAvatarURL(avatar)
    }, [userName])
    return (
        <div>
            <img src={avatarURL} alt="аватар"/>
            <div>
                avatar-URL:
                <input type="text" value={avatarURL} onChange={AvatarChangeHandler}/>
            </div>
            <div>
                name
                <input type="text"
                       value={nameFromInput}
                       onChange={NameChangeHandler}/>
                <div>
                    <button onClick={onKeyPressHandler}>set New data</button>
                </div>

            </div>

        </div>
    );
};

export default ProfilePage;