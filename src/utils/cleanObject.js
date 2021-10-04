function cleanObject(objectValue){
    let newObject = {}
    for (var prop in objectValue) {
        newObject[prop] = '';
    }
    return newObject
}
export default cleanObject