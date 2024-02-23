// import { createSlice } from '@reduxjs/toolkit'
//
// export const StatusFilters = {
//   All: 'all',
//   Active: 'active',
//   Completed: 'completed',
// }
//
// const initialState = {
//   status: StatusFilters.All,
//   colors: [],
// }
//
// const filtersSlice = createSlice({
//   name: 'filters',
//   initialState,
//   reducers: {
//     statusFilterChanged(state, action) {
//       state.status = action.payload
//     },
//     colorFilterChanged: {
//       reducer(state, action) {
//         let { color, changeType } = action.payload
//         const { colors } = state
//         switch (changeType) {
//           case 'added': {
//             if (!colors.includes(color)) {
//               colors.push(color)
//             }
//             break
//           }
//           case 'removed': {
//             state.colors = colors.filter(
//               (existingColor) => existingColor !== color
//             )
//           }
//           default:
//             return
//         }
//       },
//       prepare(color, changeType) {
//         return {
//           payload: { color, changeType },
//         }
//       },
//     },
//   },
// })
//
// export const { colorFilterChanged, statusFilterChanged } = filtersSlice.actions
//
// export default filtersSlice.reducer
import { createSlice } from '@reduxjs/toolkit';
import { STATUS_FILTER_CHANGED, COLOR_FILTER_CHANGED } from '../../actionTypes';
// import {} from  '../../actionTypes'
export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
};

const initialState = {
  status: StatusFilters.All,
  colors: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    [STATUS_FILTER_CHANGED](state, action) {
      state.status = action.payload;
    },
    [COLOR_FILTER_CHANGED]: {
      reducer(state, action) {
        let { color, changeType } = action.payload;
        const { colors } = state;
        switch (changeType) {
          case 'added': {
            if (!colors.includes(color)) {
              colors.push(color);
            }
            break;
          }
          case 'removed': {
            state.colors = colors.filter(
                (existingColor) => existingColor !== color
            );
            break;
          }
          default:
            return;
        }
      },
      prepare(color, changeType) {
        return {
          payload: { color, changeType },
        };
      },
    },
  },
});

export const { colorFilterChanged, statusFilterChanged } = filtersSlice.actions;

export default filtersSlice.reducer;
