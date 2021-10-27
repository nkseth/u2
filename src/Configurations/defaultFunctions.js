const sortByOrder = (arrayList) => {
    console.log("arrayList", arrayList)
    const sortedArray = arrayList.sort((a, b) => (a.order > b.order) ? 1 : -1)
    console.log("sortedArray", sortedArray)
    return sortedArray;
}

const defaultFunctions = {
    sortByOrder,
}

export default defaultFunctions;