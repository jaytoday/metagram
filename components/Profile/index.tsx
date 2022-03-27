import React from "react"
import CreateProfile from "./Create"
import UserProfile from "./Profile"
import dappStore from "../../stores/dappStore"

function Profile() {
    const state = dappStore((state) => state)
    return <>{state.profile ? <UserProfile /> : <CreateProfile />}</>
}

export default Profile
