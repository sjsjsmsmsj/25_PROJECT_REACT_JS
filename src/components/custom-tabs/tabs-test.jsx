import Tabs from './tabs.jsx'
import './tabs.css'
const randomComponent = () => {
    return <h1>Some random content</h1>
}


export default function TabTest() {

    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is content for Tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>This is content for Tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <div>This is content for Tab 3</div>
        }
    ]
    const handleChange = (currentTabIndex) => {
        console.log(currentTabIndex)
    }

    return (
        <Tabs
            tabsContent={tabs}
            onChange={handleChange}
        />
    )
}

