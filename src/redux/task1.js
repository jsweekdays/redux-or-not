//constants
const CALC_COUNT = 'CALC_COUNT';
const REMOVE_ITEM = 'REMOVE_ITEM';
const RESET_STATE = 'RESET_STATE';

//actions
export const calcCount = () => ({ type: CALC_COUNT });
export const removeItem = item => ({ type: REMOVE_ITEM, payload: item });
export const resetState = () => ({ type: RESET_STATE });

//reducer
const initState = {
    list: [
        {
            title: 'Parent 1',
            childrens: [
                {
                    title: 'Child 1-1',
                },
                {
                    title: 'Child 1-2',
                },
            ]
        },
        {
            title: 'Parent 2',
            childrens: [
                {
                    title: 'Child 2-1',
                },
                {
                    title: 'Child 2-2',
                    childrens: [
                        {
                            title: 'Child 2-2-1',
                        },
                        {
                            title: 'Child 2-2-2',
                        },
                    ]
                },
            ]
        },
        {
            title: 'Parent 3',
            childrens: [
                {
                    title: 'Child 3-1',
                },
                {
                    title: 'Child 3-2',
                },
            ]
        }
    ],
    count: 0
};

export default (state=initState, {type, payload}) => {
    switch(type) {
        case CALC_COUNT: {
            const calculateItems = (items) => (
                items.reduce((accumulator, item) => {
                    if (item.childrens) {
                        accumulator += calculateItems(item.childrens);
                    }

                    return accumulator;
                }, items.length)
            );

            return { ...state, count: calculateItems(state.list) }
        }
        case REMOVE_ITEM: {
            const removeRecursive = (stateItems, deleteItem) => (
                stateItems
                    .filter(it => it !== deleteItem)
                    .map(it => {
                        if (it.childrens) {
                            it.childrens = it.childrens.filter(child => child !== deleteItem)
                        }
                        return it;
                    })
            );

            return {...state, list: removeRecursive(state.list, payload)}
        }
        case RESET_STATE: {
            return initState;
        }
        default:
            return state;
    }
}