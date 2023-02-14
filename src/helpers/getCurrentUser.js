async function getCurrentUser(){
    const data = await fetch('./src/assets/data.json')
    const json = await data.json()
    return json.currentUser
}

export { getCurrentUser }