import { rerender } from './rerender';
import cssHeader from "../components/Header/header.module.css";
import cssFooter from '../components/Footer/footer.module.css';

const menuArrow = document.getElementsByClassName(cssHeader.menu)[0];
const avatar = document.getElementsByClassName(cssHeader.avatar)[0];
const finishedTasksNumber = document.body.getElementsByClassName(cssFooter.finishedTask)[0];
const activeTasksNumber = document.body.getElementsByClassName(cssFooter.activeTask)[0];
