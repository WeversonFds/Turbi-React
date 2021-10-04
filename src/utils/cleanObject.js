function cleanObject(objectValue){
    let newObject = new Object;
    for (var prop in objectValue) {
        newObject[prop] = '';
    }
    return newObject
}
export default cleanObject