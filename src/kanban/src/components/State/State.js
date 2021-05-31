import temlateState from "../Constants/constants";
import { get } from '../../Utils/storage';

let state = get('kanbanDataPLN', temlateState.dataArray);

export default state;
