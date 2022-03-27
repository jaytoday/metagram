//@ts-nocheck
import { Web3Storage } from 'web3.storage'

export default function useWeb3Storage() {
    const apiToken: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGI4Q0M2ZEM2OERERDkzNzJkQmY2NDYzZTJhMUZkNzNiRDVBYUQ5YTYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDgzNzg4NTQ1MTEsIm5hbWUiOiJtZXRhZ3JhbSJ9.0dRQlrW5-6DobxQmMINUGWMjRqmkTpgS2gpo0XtsHGM"

    const store = async (file: File) => {
        const client = new Web3Storage({ token: apiToken })
        const cid = await client.put([file])
        const info = await client.status(cid)
        const uri = `https://${cid}.ipfs.dweb.link/${file.name}`
        return { cid, uri, info }
    }
    return store
}
