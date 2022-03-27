import dappStore from '../stores/dappStore'
import { getUploadUrl, upload, exportToIPFS } from "../lib/livepeer/livepeer"
import useWeb3Storage from './useWeb3Storage'

function useCreatePub() {
    const state = dappStore((state) => state)
    const store = useWeb3Storage()
    const runPublish = async (file: MediaSource | Blob) => {
        try {
            const { asset, task, url } = await getUploadUrl(file.name)
            await upload(url, file as File)
            // const uri = await exportToIPFS(asset.id)

            const { cid, uri, info } = await store(file as File)
            state.setPublications([{ uri: uri, handle: state.profile?.profileHandle, avatar: state.profile?.profileImage }])
            return true
        } catch (error) {
            console.log(error)
            return false
        }

    }
    return runPublish

}

export default useCreatePub