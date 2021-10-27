const sortByOrder = (arrayList) => {
    const sortedArray = arrayList.sort((a, b) => (a.order > b.order) ? 1 : -1)
    return sortedArray;
}

const defaultFunctions = {
    sortByOrder,
}

export default defaultFunctions;