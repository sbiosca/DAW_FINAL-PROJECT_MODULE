import React, {Suspense, useContext} from "react";
import UserContext from "../context/UserContext"

const ProfileComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../components/profile/ProfileComponent")), 1500)
    })
})

const ProfilePage = () => {
    const {users} = useContext(UserContext)
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
            <ProfileComponent infoUser={users}/>
        </Suspense>
    )

}

export default ProfilePage