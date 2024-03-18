import {Tab, TabPanel, Tabs as MaterialTabs, TabsBody, TabsHeader} from '@material-tailwind/react';
import React from "react";

interface TabContent {
    id: number;
    title:string;
    value: string;
    content: React.ReactNode;
}

export interface TabsProps {
    tabContents:TabContent[];
}

const Tabs = ({tabContents}: TabsProps) => {

    return (
        <MaterialTabs value={''}>
            <TabsHeader placeholder={''} >
                {
                    tabContents.map(({id,title,value}) => {
                        return  <Tab key={id} value={value} placeholder={title}>
                            {title}
                        </Tab>
                    })
                }

            </TabsHeader>
            <TabsBody placeholder={''}>
                {
                    tabContents.map(({id , value, content}) => {
                        return <TabPanel value={value} key={id}>{content}</TabPanel>
                    })
                }
            </TabsBody>
        </MaterialTabs>
    );
};

export default Tabs;