import { temlateState } from "../Constants/constants";
import { get } from '../../Utils/storage';

export let state = get('kanbanDataPLN', temlateState.dataArray);
