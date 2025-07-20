import MenuItem from "./menu-item";
import "./styles.css";


export default function MenuList({ list = [] }) {
    return (
        <ul className="menu-list-container">
            {
                list && list.length ?
                    list.map((dataItem) => (
                        <MenuItem key={dataItem.label} item={dataItem} />
                    )) : null
            }
        </ul>
    )
}