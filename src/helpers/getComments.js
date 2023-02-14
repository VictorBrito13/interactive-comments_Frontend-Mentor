async function getComments(){
    const data = await fetch('./src/assets/data.json')
    const json = await data.json()
    return json.comments
}

export { getComments }