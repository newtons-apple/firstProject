//reducers를 다 모은다.
import {combineReducers} from 'redux'

import detail from './detail';

const reducers = combineReducers({
    detail
})
export default reducers