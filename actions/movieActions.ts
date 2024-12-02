'use server'

import { createServerSupabaseClient } from "utils/supabse/server"

function handleError(err){
    if(err){
        console.error(err)
        throw err
    }
}

export async function searchMovies(search = '') {
    const supabase = await createServerSupabaseClient();

    const {data, error} = await supabase.from('movie')
    .select('*')
    .like('title', `%${search}%`)

    handleError(error)

    return data
}