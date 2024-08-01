const limitString = (str, limit) => {
    if(str.length > limit){
        return str.substring(0, limit);
    }
    return str
}

export default limitString

