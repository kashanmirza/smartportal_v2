import _ from 'lodash';

const getTypeData = (typeData,key,label = "") => {
    const data = _.cloneDeep(typeData);
    const arr = [];
    for (const val of data) {
        if(val[key] !== null && val[key] !== "") {
            if(key === "active") {
                if(val[key] === true){
                    arr.push({
                        label: "Active",
                        value: val[key]
                    });
                }
                else{
                    arr.push({
                        label: "Not Active",
                        value: val[key]
                    });
                }
            }
            else{
                if(_.isEmpty(label) && _.isEmpty(key)){
                    arr.push({
                        label: val[label],
                        value: val[key]
                    });
                }

                    arr.push({
                        label: val[key],
                        value: val[key]
                    });

            }
        }
    }
    return removeDuplicates(arr);
};

const removeDuplicates = (data) => {
    data = _.uniqBy(data, 'label');
    return  data
};


export default getTypeData;