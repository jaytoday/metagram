import axios from "axios"

const key: unknown = "1e5cb1a4-5736-4607-8bb2-72508c331dd9";

const instance = axios.create({
    baseURL: 'https://livepeer.com/api',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${key}`,
    },
});

async function getUploadUrl(name: string) {
    return await instance
        .post("/asset/request-upload/", {
            "name": name
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}

async function upload(url: string, body: File) {
    return await instance
        .put(url, body, {
            headers: {
                "Content-Type": "video/mp4",
            },
        })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error);
        });
}

async function exportToIPFS(assetId: string) {
    return await instance
        .post(`/asset/${assetId}/export/`, { "ipfs": {} })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error);
        });
}


export { getUploadUrl, upload, exportToIPFS }