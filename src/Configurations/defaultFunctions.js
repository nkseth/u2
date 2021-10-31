const sortByOrder = (arrayList) => {
  const sortedArray = arrayList.sort((a, b) => (a.order > b.order ? 1 : -1));
  return sortedArray;
};

const getRedirectPath = (slug) => {
  return `/designers-product-page/${slug}`;
};

const getFormatedDate = (type, value) => {
    switch (type) {
        case 'dateMonth':
            try{
                console.log("value", value)
                const splitedValue = value.split(' ');
                let slicedYear = '';
                if(splitedValue[0].length <= 4){
                    slicedYear = splitedValue[0]
                }else if(splitedValue[0].toLowerCase() === 'september'){
                    slicedYear = splitedValue[0].slice(0, 4)
                }else{
                    slicedYear = splitedValue[0].slice(0, 3)
                }

                return `${slicedYear} ${splitedValue[1].replace(',', ' ')}`
            }catch(error){
                return error;
            }
        default:
            break;
    }
}

const defaultFunctions = {
  sortByOrder,
  getRedirectPath,
  getFormatedDate,
};

export default defaultFunctions;
