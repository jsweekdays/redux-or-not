import { fromJS } from 'immutable';

//constants
const CALC_COUNT = 'CALC_COUNT';
const REMOVE_ITEM = 'REMOVE_ITEM';
const RESET_STATE = 'RESET_STATE';

//actions
export const calcCount = () => ({ type: CALC_COUNT });
export const removeItem = item => ({ type: REMOVE_ITEM, payload: item });
export const resetState = () => ({ type: RESET_STATE });

//reducer
const initState = fromJS({
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
});

export default (state=initState, {type, payload}) => {
    switch(type) {
        case CALC_COUNT: {
            const calculateItems = (items) => (
                items.reduce((accumulator, item) => {
                    if (item.get('childrens')) {
                        accumulator += calculateItems(item.get('childrens'));
                    }

                    return accumulator;
                }, items.size)
            );
            return state.merge({ count: calculateItems(state.get('list')) });
        }
        case REMOVE_ITEM: {
            const removeItemI = (list, itemToRemove) => list
                .filter(x => x !== itemToRemove)
                .map(x => x.update('childrens', y => y && removeItemI(y, itemToRemove)));
            return state.merge({ list: removeItemI(state.get('list'), payload) });
        }
        case RESET_STATE: {
            return initState;
        }
        default:
            return state;
    }
}