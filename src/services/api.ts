import type { Doc, APIResponse } from "@/types/api.types"
import axios from "axios"

export async function getLaunchById({ id }: { id: string }) {

    try {
        const { data } = await axios.get(`https://api.spacexdata.com/v5/launches/${id}`)
        const launch = data as Doc

        return launch
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getLaunches() {

    try {
        const response = await axios.get("https://api.spacexdata.com/v5/launches")

        const launches = await response.data as Doc[]

        return launches
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getLatestLaunches() {

    try {
        const response = await axios.post("https://api.spacexdata.com/v5/launches/query", {
            query: {},
            options: {
                sort: {
                    date_utc: 'desc',
                },
                limit: 20,
            }
        })

        const { docs: launches } = await response.data as APIResponse

        return launches
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getPastLaunches() {

    try {
        const response = await axios.post("https://api.spacexdata.com/v5/launches/query", {
            query: {},
            options: {
                sort: {
                    date_utc: 'asc',
                },
                limit: 20,
            }
        })

        const { docs: launches } = await response.data as APIResponse

        return launches
    } catch (error: any) {
        throw new Error(error)
    }
}

